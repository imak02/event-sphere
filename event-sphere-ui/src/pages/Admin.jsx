import React from "react";
import Sidebar from "../layout/Sidebar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Sidebar />
      </div>
      <div className="flex-[3] bg-orange-600">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
