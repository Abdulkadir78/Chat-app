import React from "react";
import { FaSignal } from "react-icons/fa";

function OnlineUsers({ users, room }) {
  return (
    <>
      <div className="d-flex bg-dark mb-3 onlineHeading">
        <FaSignal size={25} className="mt-3 mx-2 text-success" />
        <h3 className="font-weight-normal text-white mt-2">
          Online Users ({users.length})
        </h3>
      </div>
      <div className="onlineContainer">
        {users.map((user) => (
          <div key={user.id} className="d-flex">
            <div className="bg-success mt-3 ml-4 mr-2 onlineIcon"></div>
            <span className="h4 font-weight-normal">{user.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default OnlineUsers;
