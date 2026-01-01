# FoodME 🍽️

FoodME is a premium AI-powered food recommendation web application. It suggests meals tailored to your mood, diet type, serving size, spice level, and more, using advanced AI models.

## 🚀 Features

- **AI Recommendations**: Personalized meal suggestions based on your current state.
- **Premium UI**: Modern, responsive design with glassmorphism and smooth animations.
- **Authentication**: Secure user accounts to save preferences and history.
- **Real-time Images**: High-quality food imagery for every recommendation.

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS v4, Framer Motion, Lucide React.
- **Backend**: Django, Django REST Framework.
- **AI**: OpenRouter (DeepSeek R1).
- **Images**: Pexels API.

## ⚙️ Setup

### Backend
1. `cd server`
2. `python -m venv venv`
3. `source venv/bin/activate`
4. `pip install -r requirements.txt`
5. Create a `.env` file (see `.env.example`)
6. `python manage.py migrate`
7. `python manage.py runserver`

### Frontend
1. `cd client`
2. `npm install`
3. `npm run dev`

## 📄 License
MIT
