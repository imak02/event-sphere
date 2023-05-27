import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-40">
      <div className="bg-pink-50 flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-10 py-20 container px-2">
          <div className="flex-[2] my-4 text-left">
            <img src="logo3.png" alt="logo" className="py-4" />
            <p className="font-serif italic md:w-2/3 text-xl">
              Creating unforgettable moments is our passion. As an event
              management company, we specialize in crafting exceptional
              experiences for every occasion. Trust us to bring your vision to
              life and make your event truly extraordinary.
            </p>
          </div>
          <div className="flex-1 font-serif hidden md:flex md:flex-col items-start">
            <h4 className="text-2xl font-bold mb-2 ">Quick Links</h4>
            <ul>
              <Link to="/">
                <li className="p-2 text-xl hover:text-orange-500">
                  <i className="fa-solid fa-caret-right mr-3"></i>Home
                </li>
              </Link>
              <Link to="/about">
                <li className="p-2 text-xl hover:text-orange-500">
                  <i className="fa-solid fa-caret-right mr-3"></i>About
                </li>
              </Link>
              <Link to="/events">
                <li className="p-2 text-xl hover:text-orange-500">
                  <i className="fa-solid fa-caret-right mr-3"></i>Events
                </li>
              </Link>
              <Link to="/">
                <li className="p-2 text-xl hover:text-orange-500">
                  <i className="fa-solid fa-caret-right mr-3"></i>News
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex-1 font-serif mb-4">
            <h4 className="text-2xl font-bold mb-2 ">Contact Us</h4>
            <ul>
              <li className="p-2 text-xl hover:text-orange-500">
                <i className="fa-solid mr-2 fa-house"></i>Kathmandu,Nepal
              </li>
              <li className="p-2 text-xl hover:text-orange-500">
                <i className="fa-solid mr-2 fa-phone"></i>01-422639
              </li>
              <li className="p-2 text-xl hover:text-orange-500">
                <i className="fa-solid mr-2 fa-envelope"></i>dvents@gmail.com
              </li>
              <li className="p-2 text-xl hover:text-orange-500">
                <i className="fa-solid mr-2 fa-clock"></i>Sun-Fri 9:00am-6:00pm
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-pink-100 py-4 flex flex-col justify-center items-center">
        <div className="flex gap-5 justify-center items-center ">
          <Link to="/">
            <i className="fa-brands hover:text-orange-500 text-4xl fa-facebook"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands hover:text-orange-500 text-4xl fa-instagram"></i>
          </Link>{" "}
          <Link to="/">
            <i className="fa-brands hover:text-orange-500 text-4xl fa-twitter"></i>
          </Link>{" "}
          <Link to="/">
            <i className="fa-brands hover:text-orange-500 text-4xl fa-youtube"></i>
          </Link>
        </div>
        <h3 className="text-xl text-black hover:text-orange-500 font-mono mt-4">
          ©Khanal Asbin - Dvents
        </h3>
      </div>
    </div>
  );
};

export default Footer;
