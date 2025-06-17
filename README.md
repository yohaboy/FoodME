# FoodME 🍽️

FoodME is an AI-powered food recommendation web application that suggests meals tailored to your preferences — including your mood, diet type, serving size, spice level, and more. It displays personalized food recommendations along with estimated prices, helping you decide what to eat quickly and easily.

---

## 🚀 Features

✅ AI-based meal recommendations  
✅ Filter by mood, diet type, serving size, and spice level  
✅ Displays recommended dishes with estimated pricing  
✅ Built with React (frontend) and Django (backend)  
✅ Easily extendable with new filters and recommendation logic

---

## 🛠️ Tech Stack

- Frontend: React
- Backend: Django (REST API)
- AI Logic: Custom recommendation engine (integrated in Django)

---

## 📁 Project Structure

FoodME/
├── server/             # Django project
│   ├── manage.py
│   ├── foodme/          # Django project settings
│   ├── recommender/     # App for AI recommendation logic
│   ├── ...
├── client/            # React project
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── ...
├── README.md
└── requirements.txt

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

    git clone https://github.com/yohaboy/FoodME.git
    cd FoodME

### 2️⃣ Set up the backend

    cd backend
    python -m venv venv
    source venv/bin/activate  # Windows: venv\Scripts\activate
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver

The Django backend will start at http://127.0.0.1:8000/.

### 3️⃣ Set up the frontend

Open a new terminal:

    cd frontend
    npm install
    npm start

The React frontend will start at http://localhost:3000/ and communicate with the backend API.

---

## 🧩 Usage

- Open the frontend in your browser.
- Select your mood, diet type, serving size, and spice level.
- Click Get Recommendations to see AI-generated food suggestions with prices.
- Explore the recommended dishes and decide what to eat!

---

## 📌 TODO

- [ ] Add user authentication and profiles.
- [ ] Improve AI model for better recommendations.
- [ ] Integrate with live restaurant or grocery APIs.
- [ ] Add unit and integration tests.

---

## 🤝 Contributing

Contributions are welcome!
Please open an issue or submit a pull request to suggest improvements.

---

## 👨‍🍳 Author

John — Combining AI & food, one line of code at a time.

---

## ⭐️ Support

If you find this project helpful, please ⭐️ the repo and share it!
