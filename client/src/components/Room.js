import React, { useState } from "react";
import { MdGroup } from "react-icons/md";

function Room({ history }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/chat?name=${name}&room=${room}`);
  };

  return (
    <div className="container text-center" style={{ marginTop: "13rem" }}>
      <MdGroup size={40} className="mb-3 mr-2" />
      <span className="h1 font-weight-light">Rooms</span>
      <hr className="col-5 mt-0" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="font-weight-normal text-center mt-3 col-md-4 formInput"
          placeholder="Enter your name"
          maxLength="25"
          required
          autoFocus
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <input
            type="text"
            name="room"
            className="font-weight-normal text-center mt-3 col-md-4 formInput"
            placeholder="Enter room name"
            maxLength="25"
            required
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" className="btn btn-dark mt-4" value="Join" />
        </div>
      </form>
    </div>
  );
}

export default Room;
