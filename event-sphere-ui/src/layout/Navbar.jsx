import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-red-500 flex items-center px-5 justify-between">
      <div className="overflow-clip flex-1">
        <Link to="/">
          <h1 className="text-3xl">Event-Sphere</h1>
        </Link>
      </div>
      <div className="relative bg-black flex-1">
        <input
          type="text"
          className="px-3 py-2 focus:outline-rose-600 w-full"
          placeholder="Search for events..."
        />
        <div className="absolute right-2 top-2 cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <Link to="/login" className="">
          <h4>Login</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
