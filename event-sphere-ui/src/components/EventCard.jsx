import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({
  title,
  image,
  details,
  date,
  location,
  category,
  capacity,
}) => {
  const baseURL = "http://localhost:8000";
  return (
    <div className="max-w-md flex flex-col border-2 bg-white gap-4 rounded-lg m-2 ">
      <div className="relative">
        <div className="overflow-hidden rounded-lg h-72 bg-cover">
          <img
            className=" hover:scale-110  duration-300"
            src={baseURL + image}
          />
        </div>
        <div className="absolute bottom-0 rounded-lg py-2 px-4 bg-red-500">
          <p className="text-lg font-medium text-white">
            <i className="fa-solid fa-users-rays px-2"></i>
            {capacity} Seats
          </p>
        </div>
      </div>
      <div className="p-2 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p>
            <i className="fa-solid fa-calendar-days mr-1 text-red-500"></i>

            {new Date(date).toDateString()}
          </p>
          <p>
            <i className="fa-solid fa-location-dot mr-1 text-red-500"></i>
            {location}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium">{title}</h3>
        </div>
        <div className="flex justify-between items-center">
          <Link to="/">
            <p className="text-lg font-medium text-red-500 hover:underline">
              Book Now
            </p>
          </Link>
          <i className="fa-solid fa-share-nodes text-red-500"></i>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
