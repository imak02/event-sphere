import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

const Sidebar = () => {
  const authCtx = useContext(AuthContext);

  const logout = () => {
    authCtx.logout();
  };
  return (
    <div className="p-2">
      <div className="flex items-center justify-start m-4 ">
        <Link to="/">
          <img src="/logo3.png" alt="logo" />
        </Link>
      </div>
      <hr />
      <div>
        <ul>
          <NavLink
            to="/admin/"
            className={({ isActive }) =>
              isActive ? "bg-pink-500 text-orange-500" : "text-black"
            }
          >
            <li className="p-4 cursor-pointer font-bold font-serif text-2xl hover:text-orange-500 ">
              <i className="fa-solid fa-ranking-star mr-5 w-10"></i>Dashboard
            </li>
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
            <li className="p-4 cursor-pointer font-bold font-serif text-2xl hover:text-orange-500 ">
              <i className="fa-solid fa-users mr-5 w-10"></i>Users
            </li>
          </NavLink>

          <NavLink
            to="/admin/events"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
            <li className="p-4 cursor-pointer font-bold font-serif text-2xl hover:text-orange-500 ">
              <i className="fa-solid fa-calendar-days mr-5 w-10"></i>Events
            </li>
          </NavLink>
          <NavLink
            to="/admin/messages"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
            <li className="p-4 cursor-pointer font-bold font-serif text-2xl hover:text-orange-500 ">
              <i className="fa-solid fa-table-list mr-5 w-10"></i>Messages
            </li>
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
            <li className="p-4 cursor-pointer font-bold font-serif text-2xl hover:text-orange-500 ">
              <i className="fa-solid fa-home mr-5 w-10"></i>Homepage
            </li>
          </NavLink>
        </ul>
      </div>
      <hr />
      <div className="p-4  font-bold font-serif text-2xl cursor-pointer ">
        <div onClick={logout} className=" hover:text-orange-500">
          <i className="fa-solid fa-right-from-bracket mr-5 w-10"></i>SignOut
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
