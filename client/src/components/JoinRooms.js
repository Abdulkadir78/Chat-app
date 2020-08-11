import React from "react";
import { Link } from "react-router-dom";

function JoinRooms() {
  return (
    <Link to="/rooms">
      <div className="btn btn-light my-4 mx-3 col-11 col-md-3 mainBtnRooms">
        <h3 className="font-weight-normal mt-2">Join a room</h3>
        <hr />
        <p className="text-muted">
          Create a private room with a unique name. Only users with the room
          name can join.
        </p>
      </div>
    </Link>
  );
}

export default JoinRooms;
