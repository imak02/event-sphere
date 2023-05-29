import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const AdminEvents = () => {
  const data = useOutletContext();
  const events = data.events;

  return (
    <div>
      <Link to="/add-event">
        <button>Add Event</button>
      </Link>
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

export default AdminEvents;
