import React from "react";
import { Link } from "react-router-dom";

function JoinGlobal() {
  return (
    <Link to="/global">
      <div className="btn btn-light my-4 col-11 col-md-3 mx-3 mainBtnGlobal">
        <h3 className="font-weight-normal" style={{ marginTop: "-1.5rem" }}>
          Join global chat
        </h3>
        <hr className="col-10" />
        <p className="text-muted px-3">No private groups. Anyone can join.</p>
      </div>
    </Link>
  );
}

export default JoinGlobal;
