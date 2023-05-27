import React from "react";
import Banner from "../components/Banner";
import ContactCard from "../components/ContactCard";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Banner header="Contact Us" />

      <div className="mt-20 p-2">
        <h2 className="font-bold text-3xl font-pacifico text-center mb-4">
          Contact <span className="text-orange-500">Dvents</span>
        </h2>
        <h3 className="font-semibold text-xl font-serif text-center">
          Contact us if you need our services. We will be happy to make your
          events memorable!
        </h3>

        <div className=" p-2 sm:flex sm:gap-10 items-center justify-center">
          <ContactCard
            name="Address"
            value="Kathmandu-32, Koteshwor"
            logo={
              <i className="fa-solid fa-map-location-dot text-5xl self-end "></i>
            }
          />
          <ContactCard
            name="Phone"
            value="01-422369, 9846052525"
            logo={<i className="fa-solid fa-phone text-5xl self-end"></i>}
          />
          <ContactCard
            name="Email"
            value="info@dvents.com"
            logo={<i className="fa-solid fa-envelope text-5xl self-end"></i>}
          />
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center justify-center">
        <h2 className="font-pacifico text-3xl font-bold text-center">
          Get in <span className="text-orange-500">touch</span>
        </h2>
        <div className=" container flex gap-10 p-4 items-center justify-center">
          <div className="md:flex-1 w-full p-2">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .min(2, "*Name must have at least 2 characters")
                  .max(100, "*Names can't be longer than 100 characters")
                  .required("*Name is required"),

                email: Yup.string()
                  .email("*Must be a valid email address")
                  .max(100, "*Email must be less than 100 characters")
                  .required("*Email is required"),
                phone: Yup.string().required("*Phone number is required"),
                message: Yup.string().required("*Message is required"),
              })}
              onSubmit={async (values, actions) => {
                try {
                  console.log(values);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <Form className="w-full my-4">
                <div className="flex items-start justify-center flex-col mb-6">
                  <label
                    className="text-xl font-light font-serif mb-2"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <Field
                    className=" border w-full py-2 px-3 border-orange-400 focus:outline-orange-500"
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

                <div className="flex items-start justify-center flex-col mb-6">
                  <label
                    className="text-xl font-light font-serif mb-2"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <Field
                    className=" border w-full py-2 px-3 border-orange-400 focus:outline-orange-500"
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

                <div className="flex items-start justify-center flex-col mb-6">
                  <label
                    className="text-xl font-light font-serif mb-2"
                    htmlFor="phone"
                  >
                    Phone:
                  </label>
                  <Field
                    className=" border w-full py-2 px-3 border-orange-400 focus:outline-orange-500"
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
                <div className="flex items-start justify-center flex-col mb-6">
                  <label
                    className="text-xl font-light font-serif mb-2"
                    htmlFor="message"
                  >
                    Message:
                  </label>
                  <Field
                    as="textarea"
                    className=" border w-full py-2 px-3 border-orange-400 focus:outline-orange-500"
                    name="message"
                    id="message"
                  />
                  <ErrorMessage
                    component="p"
                    className="text-orange-500 px-2"
                    name="message"
                  />
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    className="bg-orange-500 text-white border-orange-500 px-6 font-serif font-bold py-1 text-xl hover:cursor-pointer rounded-sm hover:bg-orange-700"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="hidden md:flex md:flex-1 p-2">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="message"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
