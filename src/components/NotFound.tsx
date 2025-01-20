import React from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <TbError404 className="not-found-icon" />
      <h2>Page not Found</h2>
      <Link to="/" className="btn-link">
        <button className="btn-back">
          <CgArrowLongLeft className="arrow-icon" />
          Back
        </button>
      </Link>
    </div>
  );
};
