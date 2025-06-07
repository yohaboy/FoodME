import requests
import json
from django.shortcuts import render , HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import FoodRecommendation ,RestaurantRecommendation ,UserPreference
from .serializers import FoodSerializer,ResturantSerializer,PreferenceSerializer

API_KEY = "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"

class GetRecommendationView(APIView):
    def post(self , request):
        print("Raw request data:", request.data)
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
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        },
        data=json.dumps({
            "model": "deepseek/deepseek-r1-0528:free",
            "messages": [
            {
                "role": "user",
            "content": f"""
              Give me 3 food recommendations separated by a comma only. The foods should:
            - Match a {diet_type} diet
            - Fit a {mood} mood
            - Be suitable to eat at {preferred_time}
            - Match a serving size of {serving_size}
            - Align with the health goal: {health_goal}
            - Cost between {cost_range_min} and {cost_range_max} dollars
            - Have a spice level of {spice_level}

              Only reply with the 3 food names, separated by commas. Do not include any explanations, numbers, or extra text. and then search the name of the first food and give me the url of the matching image of that food
                """.strip()
            }
            ],            
        })
        )

        try:
            result = response.json()
            message = result["choices"][0]["message"]["content"]
            food_recommendations = [item.strip() for item in message.split(",")]

            food_rec = FoodRecommendation.objects.create(
                    preference=preference,
                    name=f'{food_recommendations[0]}',
                    description=f"Recommended based on your mood , diet and fund",
                    estimated_cost=(preference.cost_range_min + preference.cost_range_max) / 2
                )
            recommeded_food = FoodSerializer(food_rec)
            print("Food recommendations:", food_recommendations)

            return Response(recommeded_food.data , status=status.HTTP_201_CREATED)

        except Exception as e:
            print("Error extracting response:", e)
            print("Raw response:", response.text)
            return Response('Unable to fetch from the api')

 

