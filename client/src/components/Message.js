import React from "react";

function Message({ message, name }) {
  let sentByCurrentUser = false;

  if (message.sender === name.trim().toLowerCase()) {
    sentByCurrentUser = true;
  }

  return sentByCurrentUser ? (
    <div className="d-flex justify-content-end">
      <div className="messageBox bg-dark p-2 my-2 mr-4">
        <h6 className="font-weight-normal messageText">{message.text}</h6>
        <span className="float-right time">{message.time}</span>
      </div>
    </div>
  ) : message.sender === "admin" ? (
    <div className="d-flex justify-content-center">
      <div className="bg-light my-2 messageBox text-dark p-1">
        <h6 className="font-weight-normal messageText">{message.text}</h6>
      </div>
    </div>
  ) : (
    <div className="d-flex">
      <div className="messageBox text-dark p-2 my-2 ml-4">
        <span className="text-muted">{message.sender}</span>
        <h6 className="font-weight-normal messageText mt-1">{message.text}</h6>
        <span className="float-right text-muted time">{message.time}</span>
      </div>
    </div>
  );
}

export default Message;
