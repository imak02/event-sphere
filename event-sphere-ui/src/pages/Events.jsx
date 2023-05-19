import axios from "axios";
import React, { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/event/all");
        setEvents(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getEvents();
  }, []);

  if (loading)
    return (
      <div className="loading grid justify-center items-center min-h-[300px]">
        <img src="/loading.gif" className="h-[100px] " alt="spinner" />
      </div>
    );

  return (
    <div>
      {events?.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Id.</th>
              <th>Title</th>
              <th>Details</th>
              <th>Location</th>
              <th>Date</th>
              <th>Category</th>
              <th>Capacity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events?.map((event, index) => (
              <tr key={index}>
                <th>{event._id}</th>
                <th>{event.title}</th>
                <th>{event.details}</th>
                <th>{event.location}</th>
                <th>{event.date}</th>
                <th>{event.category}</th>
                <th>{event.capacity}</th>
                <th>icons</th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>There are no events available</h1>
      )}
    </div>
  );
};

export default Events;
