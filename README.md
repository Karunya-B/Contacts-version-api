# Contacts API

A RESTful API for managing contacts with user authentication built using Node.js, Express, and MongoDB.

## 🚀 Live Demo
API is deployed at: [https://contacts-api-mk9f.onrender.com](https://contacts-api-mk9f.onrender.com)

## ✨ Features
- User authentication with JWT
- CRUD operations for contacts
- Input validation
- Error handling
- MongoDB database integration
- Environment configuration

## 🛠️ Technology Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Express-Async-Handler
- Bcrypt

## 📝 API Endpoints

### User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register new user |
| POST | `/api/users/login` | Login user |
| GET | `/api/users/current` | Get current user info |

### Contact Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/contacts` | Get all contacts |
| POST | `/api/contacts` | Create new contact |
| GET | `/api/contacts/:id` | Get contact by ID |
| PUT | `/api/contacts/:id` | Update contact |
| DELETE | `/api/contacts/:id` | Delete contact |

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/Karunya-B/Contacts-version-api.git
```

2. Install dependencies:
```bash
cd Contacts-version-api
npm install
```

3. Create `.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
```

4. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## 🔑 Authentication

All contact routes require JWT token in Authorization header:
```bash
Authorization: Bearer your_jwt_token
```

## 📦 Example Usage

### Register User
```bash
curl -X POST https://contacts-api-mk9f.onrender.com/api/users/register \
-H "Content-Type: application/json" \
-d '{"username":"test","email":"test@test.com","password":"password123"}'
```

### Create Contact
```bash
curl -X POST https://contacts-api-mk9f.onrender.com/api/contacts \
-H "Content-Type: application/json" \
-H "Authorization: Bearer your_jwt_token" \
-d '{"name":"John Doe","email":"john@example.com","phone":"1234567890"}'
```

## ⚠️ Error Handling

The API uses consistent error response format:
```json
{
  "title": "Error Type",
  "message": "Error details",
  "stackTrace": "Stack trace (development only)"
}
```

## 📄 License
MIT

## 👤 Author
Karunya B