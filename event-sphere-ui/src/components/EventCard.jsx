import React from "react";
import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <div className="max-w-md flex flex-col border-2 bg-white gap-4 rounded-lg m-2 ">
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <img
            className=" hover:scale-110  duration-300"
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="absolute bottom-0 rounded-lg py-2 px-4 bg-red-500">
          <p className="text-lg font-medium text-white">
            <i className="fa-solid fa-users-rays px-2"></i>500 Seats
          </p>
        </div>
      </div>
      <div className="p-2 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p>
            <i className="fa-solid fa-calendar-days mr-1 text-red-500"></i>
            January 21,2021
          </p>
          <p>
            <i className="fa-solid fa-location-dot mr-1 text-red-500"></i>
            Kathmandu,Nepal
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium">
            Companies Share Strategies to then Capture Audiences On Mobile
          </h3>
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
