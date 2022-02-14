import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to={"/"}>
      <button className="btn btn-primary btn-block backBtn">Back</button>
    </Link>
  );
};

export default BackButton;
