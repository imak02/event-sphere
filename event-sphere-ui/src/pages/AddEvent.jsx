import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddEvent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="border-2 border-orange-600 rounded-sm flex items-center justify-center flex-col p-2 md:p-4 w-full max-w-2xl bg-[#FFEAD2]ainer">
        <Formik
          initialValues={{
            title: "",
            details: "",
            image: "",
            date: "",
            location: "",
            capacity: "",
            category: "",
            organizer: "",
          }}
          onSubmit={async (values, actions) => {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("details", values.details);
            formData.append("image", values.image);
            formData.append("date", values.date);
            formData.append("location", values.location);
            formData.append("capacity", values.capacity);
            formData.append("category", values.category);
            formData.append("organizer", values.organizer);

            try {
              const response = await axios({
                method: "post",
                url: "/event/add",
                data: formData,
              });
              actions.setSubmitting(false);

              console.log(response);
              if (response) {
                toast.success(response.data.message, {
                  theme: "coloorange",
                });
                actions.resetForm();

                navigate("/admin/events");
              }
            } catch (error) {
              console.log(error);
              toast.error(error.response.data.message);
            }
          }}
        >
          {({ setFieldValue, values }) => (
            <Form className="w-full my-4">
              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="title">
                  Title:
                </label>
                <Field
                  className=" border w-full py-2 px-3 rounded-sm border-orange-200 focus:outline-orange-500"
                  type="text"
                  name="title"
                  id="title"
                />
                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="title"
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="organizer">
                  Organizer:
                </label>
                <Field
                  className=" border w-full py-2 px-3 rounded-sm border-orange-200 focus:outline-orange-500"
                  type="text"
                  name="organizer"
                  id="organizer"
                />
                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="organizer"
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="date">
                  Date:
                </label>

                <Field
                  className=" border w-full py-2 px-3 rounded-sm border-orange-200 focus:outline-orange-500"
                  type="datetime-local"
                  name="date"
                  id="date"
                />

                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="date"
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="image">
                  Image:
                </label>

                <input
                  id="image"
                  type="file"
                  name="image"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    setFieldValue("image", file);
                  }}
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="location">
                  Location:
                </label>
                <Field
                  className=" border w-full py-2 px-3 rounded-sm border-orange-200 focus:outline-orange-500"
                  type="text"
                  name="location"
                  id="location"
                />
                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="location"
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="capacity">
                  Capacity:
                </label>
                <Field
                  className=" border w-full py-2 px-3 rounded-sm border-orange-200 focus:outline-orange-500"
                  type="number"
                  name="capacity"
                  id="capacity"
                />
                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="capacity"
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="category">
                  Category:
                </label>
                <Field
                  as="select"
                  name="category"
                  className=" border w-full py-2 px-3 rounded-sm border-orange-200 focus:outline-orange-500"
                >
                  <option value="business">Business</option>
                  <option value="sports">Sports</option>
                  <option value="technology">Technology</option>
                  <option value="education">Education</option>
                  <option value="entertainment">Entertainment</option>
                </Field>
                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="category"
                />
              </div>

              <div className="flex items-start justify-center flex-col mb-2">
                <label className="text-xl font-light" htmlFor="details">
                  Details:
                </label>
                <ReactQuill
                  className="w-full h-52"
                  name="details"
                  theme="snow"
                  value={values.details}
                  onChange={(value) => {
                    setFieldValue("details", value);
                  }}
                />

                <ErrorMessage
                  component="p"
                  className="text-orange-500 px-2"
                  name="details"
                />
              </div>

              <div className="flex justify-end mt-20">
                <button
                  className="bg-orange-500 text-white px-4 py-1 rounded-sm text-xl font-medium hover:bg-orange-600"
                  type="submit"
                >
                  Add Event
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddEvent;
