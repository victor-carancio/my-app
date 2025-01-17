import React from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { TbFaceIdError } from "react-icons/tb";
import { Link } from "react-router-dom";

const ErrorSearch = () => {
  return (
    <div className="error-search-container">
      <TbFaceIdError className="error-icon" />
      <h2>No country matched your search criteria</h2>
      <Link to="/" className="btn-link">
        <button className="btn-back">
          <CgArrowLongLeft className="arrow-icon" />
          Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorSearch;
