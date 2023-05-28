import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import axios from "axios";

const MyNavLink = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "active border-4 border-orange-600 text-orange-500 rounded-md p-2 m-2"
          : "m-2 p-2 border-transparent border-4 hover:border-4 hover:border-orange-600 hover:text-orange-500 hover:rounded-md before:block before: "
      }
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <h3 className="text-xl font-semibold">{name}</h3>
    </NavLink>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logout = () => {
    authCtx.logout();
  };

  useEffect(() => {
    if (isLoggedIn) {
      const getUser = async () => {
        try {
          const response = await axios.get("/user/current-user");
          authCtx.setUser(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      getUser();
    }
  }, [isLoggedIn]);

  return (
    <div>
      <div className=" px-2 py-4 bg-pink-50 flex items-center justify-between lg:justify-around">
        <div className="flex items-center justify-center">
          <Link to="/">
            {/* <h1 className="text-3xl font-bold hover:scale-110 hover:translate-x-1">
              EventXcel
            </h1> */}
            <img src="/logo3.png" alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-5">
          <MyNavLink to="/" name="Home" />
          <MyNavLink to="/about" name="About" />
          <MyNavLink to="/events" name="Events" />
          <MyNavLink to="/contact" name="Contact" />
        </div>

        <div className="hidden lg:flex justify-center items-center gap-2">
          {isLoggedIn ? (
            <div className="flex">
              <MyNavLink to="/profile" name="Profile" />
              <div className="m-2 p-2 border-transparent border-4 hover:border-4 hover:border-orange-600 hover:text-orange-500 hover:rounded-md before:block before: ">
                <button className="font-bold" onClick={logout}>
                  <h3 className="text-xl font-semibold">Logout</h3>
                </button>
              </div>
            </div>
          ) : (
            <MyNavLink to="/login" name="Login" />
          )}
        </div>

        <div
          className="lg:hidden"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark text-2xl border-2 px-2 rounded-md"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl border-2 px-2 rounded-md"></i>
          )}
        </div>
      </div>
      {isOpen && (
        <div className=" bg-pink-50 flex flex-col justify-center items-center">
          <MyNavLink to="/" name="Home" />
          <MyNavLink to="/about" name="About" />
          <MyNavLink to="/events" name="Events" />
          <MyNavLink to="/contact" name="Contact" />
          {isLoggedIn ? (
            <div className="flex">
              <MyNavLink to="/profile" name="Profile" />
              <div className="m-2 p-2 border-transparent border-4 hover:border-4 hover:border-orange-600 hover:text-orange-500 hover:rounded-md before:block before: ">
                <button className="font-bold" onClick={logout}>
                  <h3 className="text-xl font-semibold">Logout</h3>
                </button>
              </div>
            </div>
          ) : (
            <MyNavLink to="/login" name="Login" />
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
