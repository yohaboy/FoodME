import requests

IMAGE_API_KEY = "lCofacjO10WycRqKkoda3yEQyIrVX815ZjcWVpWm2nYXZLLFv7QXiD9L" 
food_name = "sushi"

headers = {
    "Authorization": IMAGE_API_KEY
}

params = {
    "query": food_name,
    "per_page": 1
}

response = requests.get("https://api.pexels.com/v1/search", headers=headers, params=params)
data = response.json()

if data['photos']:
    print(data['photos'][0]['src']['medium'])
else:
    print("No image found.")
