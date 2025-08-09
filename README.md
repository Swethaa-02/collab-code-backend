
---

## 📄 **Backend README (`server/README.md`)**

# 🖥️ Collaborative Coding Platform – Backend

This is the **Node.js + Express backend** for the Collaborative Coding Platform.  
It handles **real-time WebSocket connections** using Socket.io and syncs code changes across connected clients in the same room.

---

## 🚀 Features
- **Express.js** server
- **Socket.io** for real-time communication
- **Room-based code sharing**
- Supports multiple clients per room
- Handles join/leave events with user tracking

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **Socket.io**
- **CORS**

---

## 📂 Folder Structure
server/
│── src/
│ ├── server.js
│ └── socketManager.js
│── package.json

---


---

## ⚙️ Installation & Setup

 1️⃣ Navigate to the server folder
cd server
2️⃣ Install dependencies
npm install
3️⃣ Start the backend server
npm start
By default, the server runs at:
http://localhost:5000

---

## 🔗 Environment Variables
Create a .env file inside server/ and add:
PORT=5000

---

## 📜 License
This project is licensed under the MIT License.
