import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    password1: "",
    password2: "",
  });

  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="border-2 border-red-600 rounded-md flex items-center justify-center flex-col p-2 md:p-4 w-full max-w-2xl bg-[#FFEAD2]">
        <div className="h-12 w-12 m-2">
          <img src="favicon_io/android-chrome-512x512.png" alt="logo" />
        </div>
        <h1 className="text-3xl text-red-600 m-2 font-semibold">
          Hello there !
        </h1>
        <form className="w-full my-4">
          <div className="flex items-start justify-center flex-col mb-2">
            <label className="text-xl font-light" htmlFor="name">
              Name:
            </label>
            <input
              className=" border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={(e) => {
                setValues((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>

          <div className="flex items-start justify-center flex-col mb-2">
            <label className="text-xl font-light" htmlFor="email">
              Email:
            </label>
            <input
              className=" border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={(e) => {
                setValues((prev) => ({ ...prev, email: e.target.value }));
              }}
            />
          </div>

          <div className="flex items-start justify-center flex-col mb-2">
            <label className="text-xl font-light" htmlFor="username">
              Username:
            </label>
            <input
              className=" border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
              type="text"
              name="username"
              id="username"
              value={values.username}
              onChange={(e) => {
                setValues((prev) => ({ ...prev, username: e.target.value }));
              }}
            />
          </div>

          <div className="flex items-start justify-center flex-col mb-2">
            <label className="text-xl font-light" htmlFor="phone">
              Phone:
            </label>
            <input
              className=" border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
              type="text"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={(e) => {
                setValues((prev) => ({ ...prev, phone: e.target.value }));
              }}
            />
          </div>

          <div className="flex items-start justify-center flex-col mb-2">
            <label className="font-light text-xl" htmlFor="password1">
              Password:
            </label>
            <div className="relative w-full">
              <input
                className="border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
                type={showPassword1 ? "text" : "password"}
                name="password1"
                id="password1"
                value={values.password1}
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, password1: e.target.value }));
                }}
              />
              <div
                className="absolute right-2 top-3 text-red-400 hover:cursor-pointer"
                onClick={() => {
                  setShowPassword1((prev) => !prev);
                }}
              >
                {showPassword1 ? (
                  <i className="fa-sharp fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye  "></i>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center flex-col mb-2">
            <label className="font-light text-xl" htmlFor="password2">
              Confirm Password:
            </label>
            <div className="relative w-full">
              <input
                className="border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
                type={showPassword2 ? "text" : "password"}
                name="password2"
                id="password2"
                value={values.password2}
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, password2: e.target.value }));
                }}
              />
              <div
                className="absolute right-2 top-3 text-red-400 hover:cursor-pointer"
                onClick={() => {
                  setShowPassword2((prev) => !prev);
                }}
              >
                {showPassword2 ? (
                  <i className="fa-sharp fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye  "></i>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Link to="/register">
              <p className="text-blue-600 text-lg">Forgot Password?</p>
            </Link>

            <button
              className="bg-red-600 text-white border-red-600 px-4 py-1 rounded-md text-xl font-medium hover:cursor-pointer"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-lg">
          Already a user?{" "}
          <Link to="/login">
            <span className="text-blue-600">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
