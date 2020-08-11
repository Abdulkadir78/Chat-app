const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const moment = require("moment");
const cors = require("cors");
require("dotenv").config();
const { addUser, getUser, removeUser, getUsersInRoom } = require("./helpers");

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    let global = false;
    if (!room) {
      global = true;
      checkGlobal = room = process.env.GLOBAL_CHAT_KEY;
    }

    const { error, user } = addUser(socket.id, name, room);
    if (error) {
      return callback(error);
    }
    socket.join(user.room);

    if (global) {
      socket.emit("message", {
        sender: "admin",
        text: `Welcome to global chat, ${user.name}`,
      });
    } else {
      socket.emit("message", {
        sender: "admin",
        text: `Welcome to ${user.room}, ${user.name}`,
      });
    }

    socket.broadcast.to(user.room).emit("message", {
      sender: "admin",
      text: `${user.name} has joined`,
    });

    io.to(user.room).emit("onlineUsers", { users: getUsersInRoom(user.room) });
  });

  socket.on("userMessage", (message) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", {
      sender: user.name,
      text: message,
      time: moment().format("h:mm a"),
    });
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        sender: "admin",
        text: `${user.name} has left`,
      });
      io.to(user.room).emit("onlineUsers", {
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
