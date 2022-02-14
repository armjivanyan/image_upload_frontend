import React from "react";
import { Link, useParams } from "react-router-dom";

const Image = ({ url }) => {
  const { name } = useParams();
  const finalUrl = url || name;

  return (
    <div className="col-6 col-md-3 imageDiv">
      <img src={finalUrl} alt="image" width="100%" />
      {!name ? <Link to={finalUrl}>{finalUrl}</Link> : ""}
    </div>
  );
};

export default Image;
