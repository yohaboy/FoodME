import requests
import json

nut = "protein"
time = "lunch"

API_KEY = "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"
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
        "content": f"give me 3 food recommendations separated by a comma that have high {nut} and eat at {time} . i dont want any other texts"
      }
    ],
    
  })
)

try:
    response_json = response.json()
    message_content = response_json["choices"][0]["message"]["content"]
    results = message_content.split(",")
    print(f"AI response:{results}")
except Exception as e:
    print("Failed to parse response:", e)
    print("Raw response:", response.text)