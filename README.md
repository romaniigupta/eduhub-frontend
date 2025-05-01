# EduHub - E-learning Platform

EduHub is a complete **MERN stack-based e-learning platform** designed to provide a seamless learning experience. The project includes **frontend and backend** sections, with the frontend built using **React.js** and the backend using **Node.js**, **Express**, and **MongoDB**.

---

## **Table of Contents**

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Frontend Configuration](#frontend-configuration)
- [Backend Configuration](#backend-configuration)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [License](#license)

---

## **Introduction**

EduHub is a fully-fledged e-learning platform where users can register, log in, view courses, study lectures, and manage their accounts. The platform also provides admin functionalities for managing users and courses.

---

## **Features**

- **User Registration & Login**: Create and manage user accounts.
- **Course Management**: Browse, view, and study courses.
- **Admin Dashboard**: Admin panel to manage users and courses.
- **Password Reset**: Forgot password functionality.
- **Razorpay Integration**: Payment gateway integration for course purchases.
- **JWT Authentication**: Secure login and access to user data.

---

## **Technologies**

- **Frontend**: React.js, React Router, Axios, Bootstrap
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Payment Gateway**: Razorpay
- **Hosting**: Vercel (Frontend), Cloud (Backend, MongoDB)

---

## **Project Structure**

The project is divided into two main parts:

### **Frontend**

The frontend is located in the `frontend` folder and is built using React.js. It communicates with the backend via API calls.

frontend/
 ├── public/                # Static files (index.html, etc.)
 ├── src/                   # Source code (components, pages, etc.)
 ├── .env                   # Frontend environment variables
 ├── package.json           # Frontend dependencies and scripts
 └── README.md              # Frontend README (this file)

### **Backend**

The backend resides in the `backend` directory and is built using Node.js, Express.js, and MongoDB.

backend/
 ├── controllers/           # Request handlers (logic for routes)
 ├── models/                # Database models (MongoDB schemas)
 ├── routes/                # Express routes
 ├── .env                   # Backend environment variables
 ├── server.js              # Main entry point (server setup)
 ├── package.json           # Backend dependencies and scripts
 └── README.md              # Backend README (optional)

---

## **Setup Instructions**

### **Frontend Setup**

1. Clone the repository:
    ```bash
    git clone https://github.com/romaniigupta/eduhub-frontend.git
    cd eduhub-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    - Create a `.env` file in the `frontend` folder:
      ```env
      REACT_APP_API_URL=http://localhost:5000/api
      REACT_APP_FRONTEND_URL=https://eduhub-frontendd.vercel.app
      ```

4. Start the frontend:
    ```bash
    npm start
    ```
    The frontend will run at `http://localhost:3000`.

### **Backend Setup**

1. Clone the repository:
    ```bash
    git clone https://github.com/romaniigupta/eduhub-backend.git
    cd eduhub-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    - Create a `.env` file in the `backend` folder:
      ```env
      PORT=5000
      DB=mongodb+srv://<your-mongo-db-uri>
      Jwt_Sec=<your-jwt-secret>
      Razorpay_Key=<your-razorpay-key>
      Razorpay_Secret=<your-razorpay-secret>
      ACTIVATION_SECRET=<your-activation-secret>
      PASSWORD=<your-email-password>
      FORGOT_SECRET=<your-forgot-password-secret>
      ```

4. Start the backend:
    ```bash
    npm start
    ```
    The backend will run at `http://localhost:5000`.

---

## **Frontend Configuration**

Ensure the frontend communicates with the backend by setting the correct `REACT_APP_API_URL` environment variable in the `.env` file.

---

## **Backend Configuration**

Make sure the backend `.env` file is properly configured with the MongoDB connection string (`DB`) and other secrets, such as the JWT secret, Razorpay keys, and email credentials.

---

## **Environment Variables**

### **Frontend**

- `REACT_APP_API_URL`: Base URL for API requests.
- `REACT_APP_FRONTEND_URL`: URL for the frontend (used in email links).

### **Backend**

- `PORT`: Port for the server (default: 5000).
- `DB`: MongoDB connection string.
- `Jwt_Sec`: Secret key for JWT authentication.
- `Razorpay_Key`: Razorpay public key.
- `Razorpay_Secret`: Razorpay secret key.
- `ACTIVATION_SECRET`: Secret key for user account activation.
- `PASSWORD`: Email password for sending notifications.
- `FORGOT_SECRET`: Secret key for the password reset process.

---

## **Running the Project**

1. **Start the Backend**:
    ```bash
    cd backend
    npm start
    ```

2. **Start the Frontend**:
    ```bash
    cd frontend
    npm start
    ```

Access the application:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Now, you can copy and paste this into your `README.md` file for a sleek presentation! Let me know if you need further assistance. 🚀
