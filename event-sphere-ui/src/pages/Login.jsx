import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEyeClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="border-2 border-red-600 rounded-md flex items-center justify-center flex-col p-2 md:p-4 w-full max-w-2xl bg-[#FFEAD2]">
        <div className="h-12 w-12 m-2">
          <img src="favicon_io/android-chrome-512x512.png" alt="logo" />
        </div>
        <h1 className="text-3xl text-red-600 m-2 font-semibold">
          Welcome back !
        </h1>
        <form className="w-full my-4">
          <div className="flex items-start justify-center flex-col mb-2">
            <label className="text-xl font-light" htmlFor="user">
              Username/Email:
            </label>
            <input
              className=" border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
              type="text"
              name="user"
              id="user"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex items-start justify-center flex-col mb-2">
            <label className="font-light text-xl" htmlFor="password">
              Password:
            </label>
            <div className="relative w-full">
              <input
                className="border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div
                className="absolute right-2 top-3 text-red-400 hover:cursor-pointer"
                onClick={handleEyeClick}
              >
                {showPassword ? (
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
              Login
            </button>
          </div>
        </form>
        <p className="text-lg">
          New Here?{" "}
          <Link to="/register">
            <span className="text-blue-600">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;