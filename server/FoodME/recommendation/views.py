import requests
import json
from django.conf import settings
from django.shortcuts import render , HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import FoodRecommendation ,RestaurantRecommendation ,UserPreference
from .serializers import FoodSerializer,ResturantSerializer,PreferenceSerializer

class GetRecommendationView(APIView):
    API_KEY = settings.API_KEY
    def post(self , request):
        serializer = PreferenceSerializer(data = request.data)
        if not serializer.is_valid():
            print("Serializer errors:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                
        preference = serializer.save(user=request.user if request.user.is_authenticated else None)

        mood = preference.mood
        diet_type = preference.diet_type
        preferred_time = preference.preferred_time
        serving_size = preference.serving_size
        health_goal = preference.health_goal
        cost_range_min = preference.cost_range_min
        cost_range_max = preference.cost_range_max
        spice_level = preference.spice_level

        response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {self.API_KEY}",
            "Content-Type": "application/json",
        },
        data=json.dumps({
            "model": "deepseek/deepseek-r1-0528:free",
            "messages": [
            {
                "role": "user",
            "content": f"""
              Give me 3 well known common food recommendations separated by a comma only. The foods should:
            - Match a {diet_type} diet
            - Fit a {mood} mood
            - Be suitable to eat at {preferred_time}
            - Match a serving size of {serving_size}
            - Align with the health goal: {health_goal}
            - Cost between {cost_range_min} and {cost_range_max} dollars
            - Have a spice level of {spice_level}

              Only reply with the 3 food names, separated by commas. Do not include any explanations, numbers, or extra text.
                """.strip()
            }
            ],            
        })
        )

        try:
            result = response.json()
            print(result)
            message = result["choices"][0]["message"]["content"]
            food_recommendations = [item.strip() for item in message.split(",")]

            headers = {
                "Authorization": settings.IMAGE_API_KEY
            }
            params = {
                "query": food_recommendations[0],
                "per_page": 1
            }

            response = requests.get("https://api.pexels.com/v1/search", headers=headers, params=params)
            data = response.json()
            image_url = data['photos'][0]['src']['medium']

            food_rec = FoodRecommendation.objects.create(
                    preference=preference,
                    name=f'{food_recommendations[0]}',
                    description=f"Recommended based on your mood , diet and fund",
                    estimated_cost=(preference.cost_range_min + preference.cost_range_max) / 2,
                    image_url = image_url
                )
            
            recommeded_food = FoodSerializer(food_rec)
            print("Food recommendations:", food_recommendations)

            return Response(recommeded_food.data , status=status.HTTP_201_CREATED)

        except Exception as e:
            print("Error extracting response:", e)
            print("Raw response:", response.text)
            return Response('Unable to fetch from the api')

 

