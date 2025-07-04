// === server.js ===
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // You can later replace with your Vercel domain
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("🟢 User connected");

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    console.log(`🧠 Joined room: ${roomId}`);
  });

  socket.on("code-change", ({ roomId, code }) => {
    socket.to(roomId).emit("receive-code", code);
  });

  socket.on("chat-message", ({ roomId, username, message }) => {
    socket.to(roomId).emit("receive-message", { username, message });
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Backend server running ✅");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
