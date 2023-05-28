import React from "react";
import { Link } from "react-router-dom";

const EventGridCard = ({
  id,
  title,
  image,
  details,
  date,
  location,
  category,
  capacity,
  organizer,
}) => {
  return (
    <Link to={`/event/${id}`}>
      <div className="shadow-lg w-[350px] md:w-96 group cursor-pointer">
        <div className=" relative object-cover h-60 w-[350px] md:w-96 overflow-hidden">
          <img
            src={import.meta.env.VITE_BACKEND_API + image}
            alt="event"
            className="h-full w-full bg-cover group-hover:scale-110 duration-500 brightness-75"
          />
          <div className="absolute top-1 left-1 m-2 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 p-2 text-white font-bold font-mono">
            <i className="fa-solid fa-users-viewfinder mr-2"></i>
            {capacity}
          </div>
        </div>
        <div className="py-4">
          <h2 className="border-l-4 m-2 p-2 border-orange-500 font-semibold font-serif text-xl">
            {title}
          </h2>
          <ul className="my-4 ml-8">
            <li className="p-2 text-lg font-serif text-slate-700 font-medium">
              <i className="fa-solid fa-gears mr-1 text-orange-500 w-8"></i>
              Organized By: {organizer}
            </li>
            <li className="p-2 text-lg font-serif text-slate-700 font-medium">
              <i className="fa-solid fa-location-dot mr-1 text-orange-500 w-8"></i>

              {location}
            </li>
            <li className="p-2 text-lg font-serif text-slate-700 font-medium">
              <i className="fa-solid fa-calendar-days mr-1 text-orange-500 w-8"></i>
              {new Date(date).toDateString()}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default EventGridCard;
