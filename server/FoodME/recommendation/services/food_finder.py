class FoodRecommender:
    def __init__(self):
        # Could load from DB or external API
        self.mood_food_map = {
            'energized': ['Sushi', 'Ice Cream', 'Burgers'],
            'explorative': ['Pasta', 'Comfort Food', 'Soup'],
        }
        
        self.diet_food_map = {
            'keto': ['Pasta', 'Pizza', 'Bread'],
            'high_protein': ['Steak', 'Chicken', 'Fish'],
        }
    
    def recommend_foods(self, mood, diet_type, serving_size, cost_range):
        # Basic implementation - could be enhanced with ML or external APIs
        mood_foods = self.mood_food_map.get(mood, [])
        diet_foods = self.diet_food_map.get(diet_type, [])
        
        # Find intersection or prioritize
        recommendations = list(set(mood_foods) & set(diet_foods))
        
        if not recommendations:
            recommendations = mood_foods or diet_foods
            
        # Filter by cost (simplified)
        return [food for food in recommendations if self._is_in_cost_range(cost_range)]
    
    def _is_in_cost_range(self, cost_range):
        if cost_range in range(100 , 1000):
            return True
        # Implement actual cost checking logic
        