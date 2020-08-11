import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

function Global({ history }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/chat?name=${name}`);
  };

  return (
    <div className="container text-center" style={{ marginTop: "13rem" }}>
      <FaGlobe size={40} className="mb-3 mr-2" />
      <span className="h1 font-weight-light">Global</span>
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
          <input type="submit" className="btn btn-dark mt-4" value="Join" />
        </div>
      </form>
    </div>
  );
}

export default Global;
