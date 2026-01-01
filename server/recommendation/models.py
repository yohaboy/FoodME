from django.db import models
from user.models import CustomUser

class UserPreference(models.Model):
    MOOD_CHOICES = [
        ('energized', 'Energized'),
        ('lazy_day', 'Lazy Day'),
        ('comfort_craving', 'Comfort Craving'),
        ('explorative', 'Wants to Explore'),
        ('health_focused', 'Health Focused'),
    ]

    DIET_CHOICES = [
        ('balanced', 'Balanced Diet'),
        ('low_carb', 'Low Carb'),
        ('high_protein', 'High Protein'),
        ('vegan', 'Vegan'),
        ('vegetarian', 'Vegetarian'),
        ('pescatarian', 'Pescatarian'),
        ('keto', 'Keto'),
    ]

    SERVING_CHOICES = [
        ('solo', 'Just Me'),
        ('couple', 'Couple Meal'),
        ('family', 'Family Size'),
        ('party', 'Party / Group'),
    ]

    SPICE_LEVEL_CHOICES = [
        ('none', 'No Spice'),
        ('mild', 'Mild'),
        ('medium', 'Medium'),
        ('hot', 'Hot'),
    ]

    TIME_CHOICES = [
        ('breakfast', 'Breakfast'),
        ('brunch', 'Brunch'),
        ('lunch', 'Lunch'),
        ('snack', 'Snack'),
        ('dinner', 'Dinner'),
        ('late_night', 'Late Night'),
    ]

    HEALTH_GOAL_CHOICES = [
        ('weight_loss', 'Weight Loss'),
        ('muscle_gain', 'Muscle Gain'),
        ('maintenance', 'Weight Maintenance'),
        ('detox', 'Detox / Cleanse'),
        ('energy_boost', 'Energy Boost'),
        ('general_wellness', 'General Wellness'),
    ]

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE , null=True, blank=True)
    preferred_time = models.CharField(max_length=15, choices=TIME_CHOICES)
    mood = models.CharField(max_length=30, choices=MOOD_CHOICES)
    diet_type = models.CharField(max_length=30, choices=DIET_CHOICES)
    serving_size = models.CharField(max_length=15, choices=SERVING_CHOICES)
    spice_level = models.CharField(max_length=10, choices=SPICE_LEVEL_CHOICES)
    health_goal = models.CharField(max_length=30, choices=HEALTH_GOAL_CHOICES)
    cost_range_min = models.DecimalField(max_digits=6, decimal_places=2)
    cost_range_max = models.DecimalField(max_digits=6, decimal_places=2)
    location = models.CharField(max_length=100, blank = True , null = True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.diet_type

class FoodRecommendation(models.Model):
    preference = models.ForeignKey(UserPreference, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.URLField(blank=True, null=True)
    estimated_cost = models.DecimalField(max_digits=8, decimal_places=2)

class RestaurantRecommendation(models.Model):
    food_recommendation = models.ForeignKey(FoodRecommendation, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    address = models.TextField()
    distance = models.DecimalField(max_digits=6, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    price_level = models.CharField(max_length=10)
    yelp_id = models.CharField(max_length=50, unique=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)