import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-2">
      <div className="m-4">
        <Link to="/admin">
          <h1 className="text-3xl flex items-center  hover:text-blue-500">
            ES-ADMIN
          </h1>
        </Link>
      </div>
      <hr />
      <div>
        <ul>
          <NavLink
            to="/admin/"
            className={({ isActive }) =>
              isActive ? "bg-pink-500 text-blue-500" : "text-red-500"
            }
          >
            <li className="p-4 cursor-pointer font-medium text-xl hover:text-blue-500 ">
              <i className="fa-solid fa-ranking-star mr-3"></i>Dashboard
            </li>
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-red-500"
            }
          >
            <li className="p-4 cursor-pointer font-medium text-xl hover:text-blue-500 ">
              <i className="fa-solid fa-users mr-3"></i>Users
            </li>
          </NavLink>

          <NavLink
            to="/admin/events"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-red-500"
            }
          >
            <li className="p-4 cursor-pointer font-medium text-xl hover:text-blue-500 ">
              <i className="fa-solid fa-calendar-days mr-3"></i>Events
            </li>
          </NavLink>
          <NavLink
            to="/admin/lists"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-red-500"
            }
          >
            <li className="p-4 cursor-pointer font-medium text-xl hover:text-blue-500 ">
              <i className="fa-solid fa-table-list mr-3"></i>Lists
            </li>
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-red-500"
            }
          >
            <li className="p-4 cursor-pointer font-medium text-xl hover:text-blue-500 ">
              <i className="fa-solid fa-table-list mr-3"></i>Homepage
            </li>
          </NavLink>
        </ul>
      </div>
      <hr />
      <div className="p-4  font-medium text-xl ">
        <Link to="/admin" className=" hover:text-blue-500">
          <i className="fa-solid fa-right-from-bracket mr-3"></i>SignOut
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
