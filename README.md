# milestone_1

# 📘 Assignment Workflow & Submission Tracking System

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)
![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)

---

## 🚀 Overview
A backend API system to manage assignments in an educational environment.  
This project demonstrates backend development using REST APIs, MVC architecture, and MongoDB integration.

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Postman  

---

## 📂 Project Structure
assignment-system/
│── controllers/
│ └── assignmentController.js
│
│── middleware/
│
│── models/
│ ├── Assignment.js
│ └── Submission.js
│
│── routes/
│ └── assignmentRoutes.js
│
│── .env
│── .gitignore
│── app.js
│── package.json
│── README.md




---

## ⚙️ Features

### ✅ Backend Setup
- Express server configured in `app.js`
- MongoDB connected using Mongoose
- Environment variables using `.env`

### ✅ MVC Architecture
- Controllers for logic
- Routes for endpoints
- Models for schemas

### ✅ Data Models
- Assignment model:
  - title
  - subject
  - description
  - dueDate

- Submission model:
  - basic schema defined

### ✅ CRUD Operations (Assignments)
- Create assignment  
- Get all assignments  
- Get assignment by ID  
- Update assignment  
- Delete assignment  

### ✅ Middleware
- Logs request method and route

### ✅ Validation
- Basic validation implemented

### ✅ Testing
- APIs tested using Postman

### ✅ Version Control
- GitHub repository maintained

---

---

## 🔧 Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/your-username/assignment-system.git
cd assignment-system
npm install
MONGO_URI=your_mongodb_connection_string
PORT=5000
npm start 
| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| POST   | /api/assignments     | Create assignment    |
| GET    | /api/assignments     | Get all assignments  |
| GET    | /api/assignments/:id | Get assignment by ID |
| PUT    | /api/assignments/:id | Update assignment    |
| DELETE | /api/assignments/:id | Delete assignment    |


---

