import requests
from django.conf import settings

class RestaurantFinder:
    def __init__(self):
        self.yelp_api_key = settings.YELP_API_KEY
        self.base_url = "https://api.yelp.com/v3/businesses/search"
    
    def find_restaurants(self, food_item, location, radius=5000, limit=5):
        headers = {
            "Authorization": f"Bearer {self.yelp_api_key}"
        }
        
        params = {
            "term": food_item,
            "location": location,
            "radius": radius,
            "limit": limit
        }
        
        response = requests.get(self.base_url, headers=headers, params=params)
        response.raise_for_status()
        
        return self._process_yelp_response(response.json())
    
    def _process_yelp_response(self, yelp_data):
        restaurants = []
        for business in yelp_data.get('businesses', []):
            restaurants.append({
                'name': business['name'],
                'address': ', '.join(business['location']['display_address']),
                'distance': business['distance'] / 1609.34,  # Convert meters to miles
                'rating': business['rating'],
                'price_level': business.get('price', '?'),
                'yelp_id': business['id'],
                'latitude': business['coordinates']['latitude'],
                'longitude': business['coordinates']['longitude']
            })
        return restaurants