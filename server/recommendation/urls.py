from django.urls import path
from .views import GetRecommendationView

urlpatterns = [
    path('', GetRecommendationView.as_view() , name="demo"),
]