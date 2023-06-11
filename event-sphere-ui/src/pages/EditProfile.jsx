import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const nameRegex = /^[a-zA-Z-' ]+$/;
const usernameRegex = /^[a-z0-9_-]{3,15}$/;
const phoneRegex = /^(\+977)?[0-9]{9,10}$/;

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { id: userId } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/user/${userId}`);
        setUser(response.data.data);
        const profilePic = `${axios.defaults.baseURL}/${response?.data?.data?.profilePic}`;
        setImage(profilePic);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };
    getUser();
  }, [userId]);

  return (
    <div className="flex items-center justify-center min-h-screen font-serif mx-2">
      <div className="border-2 border-black rounded-sm flex items-center justify-center flex-col p-2 md:p-4 w-full max-w-2xl">
        <h1 className="text-3xl my-4 font-semibold font-pacifico">
          Edit <span className="text-orange-400">Profile</span>
        </h1>
        <Formik
          enableReinitialize
          initialValues={{
            name: user?.name ?? "",
            email: user?.email ?? "",
            username: user?.username ?? "",
            phone: user?.phone ?? "",
            image: user?.image ?? "",
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
          })}
          onSubmit={async (values, actions) => {
            console.log(values);
            const formData = new FormData();
            formData.set("name", values.name);
            formData.set("username", values.username);
            formData.set("email", values.email);
            formData.set("phone", values.phone);
            formData.set("image", values.image);
            try {
              const response = await axios({
                method: "put",
                url: "/user/update",
                data: formData,
              });
              actions.setSubmitting(false);

              console.log(response);
              if (response) {
                toast.success(response.data.message, {
                  theme: "colored",
                });
                actions.resetForm();
                navigate("/profile");
              }
            } catch (error) {
              toast.error(error.response.data.message);
              console.log(error);
            }
          }}
        >
          {({ setFieldValue }) => (
            <Form className="w-full my-4">
              <div className="flex flex-col items-center justify-center mb-2">
                <div className="h-52 w-52 rounded-full overflow-hidden my-5">
                  <img src={image} alt="profile" height="100%" width="100%" />
                </div>

                <label
                  htmlFor="image"
                  className="bg-orange-600 text-white border-orange-600 px-4 py-1 rounded-sm text-xl font-medium hover:cursor-pointer hover:bg-orange-400"
                >
                  Change Profile Picture
                </label>
                <input
                  hidden
                  id="image"
                  name="image"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                    setImage(URL.createObjectURL(event.target.files[0]));
                  }}
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="name">
                  Name:
                </label>
                <Field
                  className=" border w-full py-2 px-3 rounded-sm border-orange-300 focus:outline-orange-500"
                  type="text"
                  name="name"
                  id="name"
                />
                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="name"
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="email">
                  Email:
                </label>
                <Field
                  className=" border w-full py-2 px-3 rounded-sm border-orange-300 focus:outline-orange-500"
                  type="email"
                  name="email"
                  id="email"
                />

                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="email"
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="username">
                  Username:
                </label>
                <Field
                  className=" border w-full py-2 px-3 rounded-sm border-orange-300 focus:outline-orange-500"
                  type="text"
                  name="username"
                  id="username"
                />
                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="username"
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="phone">
                  Phone:
                </label>
                <Field
                  className=" border w-full py-2 px-3 rounded-sm border-orange-300 focus:outline-orange-500"
                  type="text"
                  name="phone"
                  id="phone"
                />
                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="phone"
                />
              </div>

              <div className="flex justify-end mt-8">
                <button
                  className="bg-orange-600 text-white border-orange-600 px-4 py-1 rounded-sm text-xl font-medium hover:cursor-pointer hover:bg-orange-400"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditProfile;
