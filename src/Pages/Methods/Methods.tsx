import React from "react";
import { Outlet } from "react-router-dom";

export const Methods = () => {
  return (
    <div className="container">
      <h2 className="title">Methods</h2>
      <Outlet />
    </div>
  );
};
