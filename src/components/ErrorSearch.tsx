import React from "react";
import { TbFaceIdError } from "react-icons/tb";

const ErrorSearch = () => {
  return (
    <div className="error-search-container">
      <TbFaceIdError className="error-icon" />
      <h2>No country matched your search criteria</h2>
    </div>
  );
};

export default ErrorSearch;
