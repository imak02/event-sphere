import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import EventCard from "../components/EventCard";
import axios from "axios";
import EventGridCard from "../components/EventGridCard";

const Events = () => {
  const [events, setEvents] = useState(null);

  const [loading, setLoading] = useState(true);
  const { search } = useLocation();

  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/event/all${search}`);
        setEvents(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getEvents();
  }, [search]);

  if (loading)
    return (
      <div className="loading grid justify-center items-center min-h-[300px]">
        <img src="/loading.gif" className="h-[100px] " alt="spinner" />
      </div>
    );

  return (
    <div>
      {" "}
      <div className="container mt-52">
        <Link to="/admin/">Admin</Link>
        <div>
          <h2 className="text-3xl font-medium text-center">Popular Events</h2>
        </div>
        <div className="flex justify-center flex-wrap items-center md:gap-10 p-2 h-auto md:h-20">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active border border-red-600 text-red-600"
                : ""
            }
          >
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              All
            </p>
          </NavLink>
          <NavLink
            to="?cat=business"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active border border-red-600 text-red-600"
                : ""
            }
          >
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              Business
            </p>
          </NavLink>
          <NavLink
            to="/?cat=sports"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active border border-red-600 text-red-600"
                : ""
            }
          >
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              Sports
            </p>
          </NavLink>
          <NavLink
            to="/?cat=technology"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active border border-red-600 text-red-600"
                : ""
            }
          >
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              Technology
            </p>
          </NavLink>
          <NavLink
            to="/?cat=education"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active border border-red-600 text-red-600"
                : ""
            }
          >
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              Education
            </p>
          </NavLink>
          <NavLink
            to="/?cat=entertainment"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active border border-red-600 text-red-600"
                : ""
            }
          >
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              Entertainment
            </p>
          </NavLink>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {events?.map((event, index) => (
            <EventGridCard
              id={event._id}
              key={event._id}
              title={event.title}
              image={event.image}
              details={event.details}
              capacity={event.capacity}
              category={event.category}
              location={event.location}
              date={event.date}
              organizer={event.organizer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

{
  /* <EventCard
              id={event._id}
              key={event._id}
              title={event.title}
              image={event.image}
              details={event.details}
              capacity={event.capacity}
              category={event.category}
              location={event.location}
              date={event.date}
            /> */
}
