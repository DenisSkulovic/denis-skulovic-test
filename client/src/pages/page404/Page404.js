import React from "react";
import "./Page404.scss";
import { Link, useHistory } from "react-router-dom";

function Page404() {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className="page-404">
      <div className="main with-navbar d-flex align-items-center justify-content-center">
        <h4>404 Not Found</h4>
        <Link to="/">Home</Link>
        <Link
          onClick={() => {
            handleClick();
          }}
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default Page404;
