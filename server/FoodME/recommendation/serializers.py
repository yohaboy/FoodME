from .models import FoodRecommendation ,RestaurantRecommendation ,UserPreference
from rest_framework import serializers

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodRecommendation
        fields = "__all__"

class ResturantSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantRecommendation
        fields = "__all__"

class PreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreference
        fields = ['preferred_time','mood', 'diet_type', 'serving_size', 'cost_range_min', 'cost_range_max', 'location']