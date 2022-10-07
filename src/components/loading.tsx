import React from "react";
import loadingImg from "../assets/logo2.svg";

const Loading = () => {
  return (
    <section className="loading">
      <div className="loading-container">
        <img src={loadingImg} alt="" />
      </div>
    </section>
  );
};

export default Loading;
