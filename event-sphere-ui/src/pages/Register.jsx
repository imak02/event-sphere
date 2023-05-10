import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const nameRegex = /^[a-zA-Z-' ]+$/;
const usernameRegex = /^[a-z0-9_-]{3,15}$/;
const phoneRegex = /^(\+977)?[0-9]{9,10}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const Register = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="border-2 border-red-600 rounded-md flex items-center justify-center flex-col p-2 md:p-4 w-full max-w-2xl bg-[#FFEAD2]">
        <div className="h-12 w-12 m-2">
          <img src="favicon_io/android-chrome-512x512.png" alt="logo" />
        </div>
        <h1 className="text-3xl text-red-600 m-2 font-semibold">
          Hello there !
        </h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            username: "",
            phone: "",
            password1: "",
            password2: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, "*Name must have at least 2 characters")
              .matches(nameRegex, "*Please enter a valid name")
              .max(100, "*Names can't be longer than 100 characters")
              .required("*Name is required"),
            username: Yup.string()
              .min(3, "*Username must have 3-15 characters only")
              .max(15, "*Username must have 5-15 characters only")
              .matches(
                usernameRegex,
                "*Can contain any lower case character, digit or special symbol “_-” only"
              )
              .required("*Username is required"),
            email: Yup.string()
              .email("*Must be a valid email address")
              .max(100, "*Email must be less than 100 characters")
              .required("*Email is required"),
            phone: Yup.string()
              .matches(phoneRegex, "*Phone number is not valid")
              .required("*Phone number is required"),
            password1: Yup.string()
              .min(8, "*Password must contain minimum of 8 characters")
              .matches(
                passwordRegex,
                "*Must contain at least one uppercase letter, one lowercase letter, one number and one special character"
              )
              .required("*Password required"),
            password2: Yup.string().oneOf(
              [Yup.ref("password1"), null],
              "Both passwords do not match."
            ),
          })}
          onSubmit={async (values, actions) => {
            let formContent = Object.assign({}, values);
            delete formContent.password2;
            try {
              const response = await axios({
                method: "post",
                url: "/user/register",
                data: formContent,
              });
              actions.setSubmitting(false);

              console.log(response);
              if (response) {
                toast.success(response.data.message, {
                  theme: "colored",
                });
                actions.resetForm();

                navigate("/login");
              }
            } catch (error) {
              toast.error(error.response.data.message);
              console.log(error);
            }
          }}
        >
          <Form className="w-full my-4">
            <div className="flex items-start justify-center flex-col mb-2">
              <label className="text-xl font-light" htmlFor="name">
                Name:
              </label>
              <Field
                className=" border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
                type="text"
                name="name"
                id="name"
              />
              <ErrorMessage
                component="p"
                className="text-red-500 px-2"
                name="name"
              />
            </div>

            <div className="flex items-start justify-center flex-col mb-2">
              <label className="text-xl font-light" htmlFor="email">
                Email:
              </label>
              <Field
                className=" border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
                type="email"
                name="email"
                id="email"
              />

              <ErrorMessage
                component="p"
                className="text-red-500 px-2"
                name="email"
              />
            </div>

            <div className="flex items-start justify-center flex-col mb-2">
              <label className="text-xl font-light" htmlFor="username">
                Username:
              </label>
              <Field
                className=" border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
                type="text"
                name="username"
                id="username"
              />
              <ErrorMessage
                component="p"
                className="text-red-500 px-2"
                name="username"
              />
            </div>

            <div className="flex items-start justify-center flex-col mb-2">
              <label className="text-xl font-light" htmlFor="phone">
                Phone:
              </label>
              <Field
                className=" border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
                type="text"
                name="phone"
                id="phone"
              />
              <ErrorMessage
                component="p"
                className="text-red-500 px-2"
                name="phone"
              />
            </div>

            <div className="flex items-start justify-center flex-col mb-2">
              <label className="font-light text-xl" htmlFor="password1">
                Password:
              </label>
              <div className="relative w-full">
                <Field
                  className="border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
                  type={showPassword1 ? "text" : "password"}
                  name="password1"
                  id="password1"
                />
                <ErrorMessage
                  component="p"
                  className="text-red-500 px-2"
                  name="password1"
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
                <Field
                  className="border w-full py-2 px-3 rounded-md border-red-200 focus:outline-red-500"
                  type={showPassword2 ? "text" : "password"}
                  name="password2"
                  id="password2"
                />
                <ErrorMessage
                  component="p"
                  className="text-red-500 px-2"
                  name="password2"
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
          </Form>
        </Formik>
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
