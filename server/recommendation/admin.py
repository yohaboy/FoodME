from django.contrib import admin
from .models import UserPreference ,FoodRecommendation ,RestaurantRecommendation

admin.site.register(UserPreference)
admin.site.register(FoodRecommendation)
admin.site.register(RestaurantRecommendation)