🚀 Kidrove Workshop Registration Platform

A modern and responsive workshop registration platform built with React, Vite, Tailwind CSS, Node.js, and Express.js. Users can seamlessly register for workshops through a clean and user-friendly interface connected to a backend API.

🌐 Live Demo

🔗 Frontend: https://kidrove-workshop-e0r03tn24-lucky20.vercel.app/

🔗 Backend: https://kidrove-workshop-1x1d.onrender.com

---

✨ Features

✅ Modern Responsive UI

✅ Interactive Workshop Details Section

✅ Learning Outcomes Section

✅ Frequently Asked Questions (FAQ)

✅ Registration Form with Validation

✅ Real-time API Integration

✅ Success & Error Handling

✅ Mobile-Friendly Design

✅ Fast Performance with Vite

---

🛠️ Tech Stack

Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

Backend

- Node.js
- Express.js
- CORS

Deployment

- Vercel (Frontend)
- Render (Backend)

---

📁 Project Structure

frontend/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── WorkshopDetails.jsx
│   │   ├── LearningOutcomes.jsx
│   │   ├── FAQ.jsx
│   │   └── RegistrationForm.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json

backend/
│
├── routes/
│   └── enquiry.js
│
├── server.js
└── package.json

---

⚙️ Installation & Setup

Clone the Repository

git clone https://github.com/luckypathak78/kidrove-workshop


Frontend Setup

cd frontend

npm install

npm run dev

Backend Setup

cd backend

npm install

npm run dev

---

🔐 Environment Variables

Create a ".env" file inside the frontend directory:

VITE_API_URL=https://kidrove-workshop-1x1d.onrender.com

---

📡 API Endpoint

Register for Workshop

POST /api/enquiry

Request Body

{
  "name": "Lucky Pathak",
  "email": "lucky@example.com",
  "phone": "9876543210"
}

Success Response

{
  "success": true,
  "message": "Registration successful 🎉"
}

---

🎯 Future Enhancements

- Database Integration (MongoDB)
- Email Notifications
- Admin Dashboard
- User Authentication
- Workshop Seat Management
- Analytics Dashboard

---

💡 Learning Outcomes

This project helped strengthen skills in:

- React Component Architecture
- State Management using Hooks
- API Integration with Axios
- Express.js Backend Development
- Environment Variables
- Frontend Deployment on Vercel
- Backend Deployment on Render

---

👨‍💻 Author

Lucky 

🎓 B.Tech CSE Student

💻 Frontend & MERN Stack Developer

🔗 GitHub: https://github.com/luckypathak78/kidrove-workshop

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
