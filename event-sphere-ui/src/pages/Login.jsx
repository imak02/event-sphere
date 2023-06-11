import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContextProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const handleEyeClick = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: "/user/login",
        data: { user, password },
      });

      console.log(response);
      if (response) {
        authCtx.login(response.data.data.token);
        toast.success(response.data.message, {
          theme: "colored",
        });

        setUser("");
        setPassword("");
        if (response.data.data.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-serif">
      <div className="flex items-center justify-center flex-col p-2 md:p-4 w-full max-w-2xl border-2 border-black mx-2">
        <h1 className="text-3xl my-4 font-semibold font-pacifico">
          Welcome <span className="text-orange-400">back !</span>
        </h1>
        <form className="w-full my-4" onSubmit={handleSubmit}>
          <div className="flex items-start justify-center flex-col mb-4">
            <label className="text-xl font-light font-serif" htmlFor="user">
              Username/Email:
            </label>
            <input
              className=" border w-full py-2 px-3 rounded-sm border-orange-300 focus:outline-orange-500"
              type="text"
              name="user"
              id="user"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div className="flex items-start justify-center flex-col mb-4">
            <label className="font-light font-serif text-xl" htmlFor="password">
              Password:
            </label>
            <div className="relative w-full">
              <input
                className="border w-full py-2 px-3 rounded-sm border-orange-300 focus:outline-orange-500"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div
                className="absolute right-2 top-3 text-orange-400 hover:cursor-pointer"
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
          <div className="flex justify-between mt-8">
            <Link to="/register">
              <p className="text-blue-600 text-lg">Forgot Password?</p>
            </Link>

            <button
              className="bg-orange-600 text-white border-orange-600 px-4 py-1 rounded-sm text-xl font-medium hover:cursor-pointer"
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
