import React from "react";
import { MdGroup } from "react-icons/md";

function ChatBoxHead({ room }) {
  return (
    <div className="bg-dark group">
      <MdGroup size={30} className="mb-2 mx-2 text-white" />
      <span className="h3 font-weight-normal text-white">
        {room ? room : "Global"}
      </span>
      <a
        href="/"
        title="Leave"
        className="float-right text-decoration-none text-white"
        style={{ fontSize: "1.7rem" }}
      >
        &times;
      </a>
    </div>
  );
}

export default ChatBoxHead;
