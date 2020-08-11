import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Messages from "./Messages";
import OnlineUsers from "./OnlineUsers";
import ChatBoxHead from "./ChatBoxHead";
import MessageInput from "./MessageInput";
import Error from "./Error";

let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const ENDPOINT = "https://react-chatting-app-1.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, (error) => setError(error));
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (message) =>
      setMessages((messages) => [...messages, message])
    );
    socket.on("onlineUsers", ({ users }) => setUsers(users));
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("userMessage", message);
      setMessage("");
    }
  };

  return !error ? (
    <>
      <div className="chatContainer d-flex justify-content-around">
        <div className="chatBox mt-5 d-flex flex-column">
          <ChatBoxHead room={room} />

          <Messages messages={messages} name={name} />

          <MessageInput
            message={message}
            handleChange={handleChange}
            sendMessage={sendMessage}
          />
        </div>

        <div className="onlineUsers mt-5 ml-5 d-none">
          <OnlineUsers users={users} room={room} />
        </div>
      </div>
    </>
  ) : (
    <Error error={error} />
  );
}

export default Chat;
