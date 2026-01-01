import requests
import json
import random
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import FoodRecommendation, UserPreference
from .serializers import FoodSerializer, PreferenceSerializer

class GetRecommendationView(APIView):
    permission_classes = [IsAuthenticated]
    API_KEY = settings.API_KEY
    
    # List of reliable free models on OpenRouter to rotate through
    MODELS = [
        "google/gemini-2.0-flash-exp:free",
        "google/gemini-2.0-flash-lite-preview-02-05:free",
        "deepseek/deepseek-r1-distill-llama-70b:free",
        "mistralai/mistral-7b-instruct:free",
        "huggingfaceh4/zephyr-7b-beta:free",
        "openchat/openchat-7b:free"
    ]

    def post(self, request):
        user = request.user
        if user.tokens < 5:
            return Response({'error': 'You are out of tokens. Each generation costs 5 tokens.'}, status=status.HTTP_403_FORBIDDEN)

        if not self.API_KEY:
            return Response({'error': 'API key is missing. Please check your .env file.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        serializer = PreferenceSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                
        preference = serializer.save(user=request.user if request.user.is_authenticated else None)

        prompt = f"""
        Give me 3 well known common food recommendations. The foods should:
        - Match a {preference.diet_type} diet
        - Fit a {preference.mood} mood
        - Be suitable to eat at {preference.preferred_time}
        - Match a serving size of {preference.serving_size}
        - Align with the health goal: {preference.health_goal}
        - Cost between {preference.cost_range_min} and {preference.cost_range_max} dollars
        - Have a spice level of {preference.spice_level}

        For each food, provide:
        1. Name
        2. A brief description
        3. An ACCURATE estimated price (single number, not a range) based on typical market prices.

        Format your response as a JSON array of objects with keys: "name", "description", "price".
        Only reply with the JSON. No other text.
        """.strip()

        # Robust model switching logic
        tried_models = []
        available_models = list(self.MODELS)
        random.shuffle(available_models) # Randomize start to distribute load

        for model in available_models:
            try:
                print(f"Attempting recommendation with model: {model}")
                response = requests.post(
                    url="https://openrouter.ai/api/v1/chat/completions",
                    headers={
                        "Authorization": f"Bearer {self.API_KEY}",
                        "Content-Type": "application/json",
                        "HTTP-Referer": "http://localhost:3000", # Required by some OpenRouter models
                        "X-Title": "FoodME AI",
                    },
                    data=json.dumps({
                        "model": model,
                        "messages": [{"role": "user", "content": prompt}],
                        "response_format": { "type": "json_object" } if "gemini" in model else None            
                    }),
                    timeout=15
                )
                
                result = response.json()
                if "choices" in result:
                    content = result["choices"][0]["message"]["content"]
                    # Clean content if not pure JSON
                    if "```json" in content:
                        content = content.split("```json")[1].split("```")[0].strip()
                    elif "```" in content:
                        content = content.split("```")[1].split("```")[0].strip()
                    
                    food_data = json.loads(content)
                    # Handle case where AI returns an object with a list instead of a direct list
                    if isinstance(food_data, dict):
                        for key in ["foods", "recommendations", "items"]:
                            if key in food_data:
                                food_data = food_data[key]
                                break
                    
                    if not isinstance(food_data, list):
                        food_data = [food_data]

                    recommendations = []
                    headers = {"Authorization": settings.IMAGE_API_KEY} if settings.IMAGE_API_KEY else {}

                    for item in food_data[:3]:
                        name = item.get("name", "Unknown Dish")
                        desc = item.get("description", f"A delicious {name} suited for your preferences.")
                        price = item.get("price", (preference.cost_range_min + preference.cost_range_max) / 2)
                        
                        image_url = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                        
                        if settings.IMAGE_API_KEY:
                            try:
                                img_response = requests.get(
                                    "https://api.pexels.com/v1/search", 
                                    headers=headers, 
                                    params={"query": name, "per_page": 1}
                                )
                                img_data = img_response.json()
                                if img_data.get('photos'):
                                    image_url = img_data['photos'][0]['src']['large']
                            except:
                                pass

                        food_rec = FoodRecommendation.objects.create(
                            preference=preference,
                            name=name,
                            description=desc,
                            estimated_cost=price,
                            image_url=image_url
                        )
                        recommendations.append(food_rec)
                    
                    user.tokens -= 5
                    user.save()
                    
                    return Response(FoodSerializer(recommendations, many=True).data, status=status.HTTP_201_CREATED)
                
                print(f"Model {model} failed: {result.get('error', 'Unknown error')}")
                tried_models.append(model)

            except Exception as e:
                print(f"Error with model {model}: {str(e)}")
                tried_models.append(model)
                continue

        return Response({
            'error': 'All AI models exhausted or hit limits.',
            'tried_models': tried_models
        }, status=status.HTTP_502_BAD_GATEWAY)
