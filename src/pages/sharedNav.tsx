import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const SharedNav = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedNav;
