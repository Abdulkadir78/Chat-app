import React from "react";

function MessageInput({ message, handleChange, sendMessage }) {
  return (
    <form
      onSubmit={sendMessage}
      id="msgInput"
      style={{ borderTop: "1px black solid" }}
    >
      <input
        id="message"
        type="text"
        name="message"
        placeholder="Type a message..."
        value={message}
        className="p-3"
        onChange={handleChange}
        autoComplete="off"
        autoFocus
      />
      <input
        type="submit"
        value="SEND"
        className="sendBtn text-white bg-dark"
      />
    </form>
  );
}

export default MessageInput;
