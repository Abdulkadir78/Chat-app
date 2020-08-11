import React from "react";
import { withRouter } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

function Error({ error, history }) {
  return (
    <div className="card col-11 col-md-4 col-lg-3 mx-auto text-center bg-light error">
      <div className="card-text mt-2">
        <MdErrorOutline className="text-danger mb-2" size={30} />
        <span className="h3 font-weight-normal"> {error} :( </span>
        <p className="text-muted mt-1">
          This chat already has a user with that name.
        </p>
      </div>

      <hr className="mt-0" />
      <div className="text-center">
        <button
          className="btn btn-light mb-2 w-50"
          onClick={() => history.goBack()}
        >
          <span>
            <BsArrowLeft size={20} className="mr-1" />
            Try another one
          </span>
        </button>
      </div>
    </div>
  );
}

export default withRouter(Error);
