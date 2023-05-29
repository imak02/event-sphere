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

  if (loading)
    return (
      <div className="loading grid justify-center items-center min-h-[300px]">
        <img src="/loading.gif" className="h-[100px] " alt="spinner" />
      </div>
    );

  return (
    <div>
      <Banner header="Events By Us" />

      <div className="flex flex-wrap justify-center items-center gap-4">
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
  );
};

export default Events;
