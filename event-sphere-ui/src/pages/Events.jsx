import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import EventCard from "../components/EventCard";
import axios from "axios";
import EventGridCard from "../components/EventGridCard";
import Banner from "../components/Banner";
import Modal from "../components/Modal";

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

  const recent = events?.filter(
    (singleEvent) => new Date(singleEvent?.date) <= new Date()
  );
  const upcoming = events?.filter(
    (singleEvent) => new Date(singleEvent?.date) > new Date()
  );

  if (loading)
    return (
      <div className="loading grid justify-center items-center min-h-[300px]">
        <img src="/loading.gif" className="h-[100px] " alt="spinner" />
      </div>
    );

  return (
    <div>
      <Banner header="Events By Us" />

      <div className="mt-5 flex items-center justify-center">
        <div>
          <h2 className="font-bold font-serif text-3xl text-center">
            Filter By Category
          </h2>
          <div className="flex gap-5 my-5 ">
            <Link
              className="hover:text-orange-500 font-bold text-xl font-serif"
              to="/events"
            >
              All
            </Link>
            <Link
              className="hover:text-orange-500 font-bold text-xl font-serif"
              to="?cat=business"
            >
              Business
            </Link>
            <Link
              className="hover:text-orange-500 font-bold text-xl font-serif"
              to="?cat=sports"
            >
              Sports
            </Link>
            <Link
              className="hover:text-orange-500 font-bold text-xl font-serif"
              to="?cat=technology"
            >
              Technology
            </Link>
            <Link
              className="hover:text-orange-500 font-bold text-xl font-serif"
              to="?cat=education"
            >
              Education
            </Link>
            <Link
              className="hover:text-orange-500 font-bold text-xl font-serif"
              to="?cat=entertainment"
            >
              Entertainment
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-center font-bold font-pacifico text-4xl py-5">
          Upcoming <span className="text-orange-400">Events</span>
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {upcoming?.length <= 0 && (
            <h2 className="font-serif text-red-500 text-xl">
              There are no events available!
            </h2>
          )}
          {upcoming?.map((event, index) => (
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

      <div className="mt-16">
        <h2 className="text-center font-bold font-pacifico text-4xl py-5">
          Recent <span className="text-orange-400">Events</span>
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {recent?.length <= 0 && (
            <h2 className="font-serif text-red-500 text-xl">
              There are no events available!
            </h2>
          )}
          {recent?.map((event, index) => (
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
