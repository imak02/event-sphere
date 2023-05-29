import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Modal from "../components/Modal";
import { toast } from "react-toastify";

const AdminEvents = () => {
  const [showModal, setShowModal] = useState(false);
  const [eventId, setEventId] = useState(null);
  const [events, setEvents] = useState([]);

  const data = useOutletContext();
  useEffect(() => {
    setEvents(data.events);
  }, [data.events]);

  const navigate = useNavigate();

  const editEvent = (eventId) => {
    navigate(`/event/update/${eventId}`);
  };
  const deleteEvent = async (eventId) => {
    setEventId(eventId);
    setShowModal(true);
  };

  return (
    <div className="relative">
      {showModal && (
        <Modal
          header="Delete Event"
          content="Are you sure you want to delete this? This is irrecoverable"
          onCancel={() => {
            console.log("Cancelled");
            setShowModal(false);
          }}
          onConfirm={async () => {
            try {
              const response = await axios.delete(`/event/${eventId}`);
              console.log(response);
              toast.success(response.data.message);
              setEvents(events.filter((event) => event._id !== eventId));
              setEventId(null);
            } catch (error) {
              console.log(error);
              toast.error(error?.response?.data?.message);
            }
            setShowModal(false);
          }}
        />
      )}
      <Link to="/add-event">
        <div className="flex justify-end items-center">
          <button className="bg-orange-500 font-semibold font-serif px-4 py-2 mt-3 mb-5 rounded-sm hover:bg-orange-600 text-white ">
            Add New Event
          </button>
        </div>
      </Link>
      {events?.length > 0 ? (
        <table className="table-auto border-collapse border border-slate-400">
          <thead>
            <tr className="bg-orange-100">
              <th className="border border-slate-400 p-3">Id.</th>
              <th className="border border-slate-400 p-3">Title</th>
              <th className="border border-slate-400 p-3">Details</th>
              <th className="border border-slate-400 p-3">Location</th>
              <th className="border border-slate-400 p-3">Date</th>
              <th className="border border-slate-400 p-3">Category</th>
              <th className="border border-slate-400 p-3">Capacity</th>
              <th className="border border-slate-400 p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events?.map((event, index) => (
              <tr key={index} className="even:bg-slate-100 odd:bg-blue-100">
                <td className="border border-slate-300 p-3">{event._id}</td>
                <td className="border border-slate-300 p-3">{event.title}</td>
                <td className="border border-slate-300 p-3">
                  {event.details.length > 200
                    ? event.details.slice(0, 200) + "..."
                    : event.details}
                </td>
                <td className="border border-slate-300 p-3">
                  {event.location}
                </td>
                <td className="border border-slate-300 p-3">{event.date}</td>
                <td className="border border-slate-300 p-3">
                  {event.category}
                </td>
                <td className="border border-slate-300 p-3">
                  {event.capacity}
                </td>
                <td className="border border-slate-300 p-3">
                  <div className="flex gap-5 justify-end items-center">
                    <i
                      className="fa-solid fa-pen-to-square text-green-500 text-xl cursor-pointer"
                      onClick={() => {
                        editEvent(event._id);
                      }}
                    ></i>
                    <i
                      className="fa-solid fa-trash-can text-red-500 text-xl cursor-pointer"
                      onClick={() => {
                        deleteEvent(event._id);
                      }}
                    ></i>
                  </div>
                </td>
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
