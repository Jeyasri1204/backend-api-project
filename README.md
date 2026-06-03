# Backend API Project

A simple Backend API built using Node.js and Express.js.

## 📌 Project Description

This project demonstrates basic backend development concepts by creating REST API endpoints to manage user data.

## 🚀 Features

* GET API to retrieve users
* POST API to add new users
* Basic input validation
* JSON request and response handling

## 🛠 Technologies Used

* Node.js
* Express.js

## 📂 Project Structure

backend-api-project/

├── server.js

├── package.json

├── package-lock.json

├── .gitignore

└── README.md

## API Endpoints

### GET Users

GET /users

Returns the list of users.

### Add User

POST /users

Request Body:

{
"name": "Jeyasri",
"email": "[jeyasri@gmail.com](mailto:jeyasri@gmail.com)"
}

Response:

{
"message": "User Added Successfully"
}

## ▶️ How to Run

1. Clone the repository
2. Install dependencies

npm install

3. Start the server

node server.js

4. Open:

http://localhost:3000

## 👩‍💻 Author

Jeyasri
