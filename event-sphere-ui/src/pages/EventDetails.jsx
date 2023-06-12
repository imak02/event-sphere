import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContextProvider";
import Modal from "../components/Modal";

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const eventId = params.eventId;

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await axios.get(`/event/${eventId}`);
        console.log(response);
        setEvent(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvent();
  }, []);

  const admitToEvent = async () => {
    try {
      const response = await axios.post(`/event/${eventId}/admit`);
      toast.success(response.data.message, {
        theme: "colored",
      });
      console.log(response);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };
  const editEvent = () => {
    navigate(`/event/update/${eventId}`);
  };
  const deleteEvent = async () => {
    setShowModal(true);
  };

  const authCtx = useContext(AuthContext);
  const userId = authCtx.user._id;
  const isAdmin = authCtx.user.role === "ADMIN";

  const isAdmitted = event?.users?.includes(userId);

  const isEnded = new Date(event?.date) < new Date();

  return (
    <div className="flex items-center justify-center relative">
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
              navigate("/events");
            } catch (error) {
              console.log(error);
              toast.error(error?.response?.data?.message);
            }
            setShowModal(false);
          }}
        />
      )}
      <div className="container">
        <div className="my-5">
          {isAdmin && (
            <div className="flex gap-5 justify-end items-center p-2">
              <i
                className="fa-solid fa-pen-to-square text-green-500 text-xl cursor-pointer"
                onClick={editEvent}
              ></i>
              <i
                className="fa-solid fa-trash-can text-red-500 text-xl cursor-pointer"
                onClick={deleteEvent}
              ></i>
            </div>
          )}
          <h1 className="font-bold font-serif text-2xl md:text-4xl text-center">
            {event?.title}
          </h1>
        </div>
        <div className="md:h-[70vh] p-2 ">
          <img
            className="h-full w-full object-cover"
            src={import.meta.env.VITE_BACKEND_API + event?.image}
            alt="event"
          />
        </div>
        <div className="py-5 flex flex-col items-start md:flex-row justify-between md:items-center">
          <div className="p-2 text-lg font-serif text-slate-700 font-medium">
            <i className="fa-solid fa-gears mr-1 text-orange-500 w-8"></i>
            Organized By: {event?.organizer}
          </div>
          <div className="p-2 text-lg font-serif text-slate-700 font-medium">
            <i className="fa-solid fa-location-dot mr-1 text-orange-500 w-8"></i>
            {event?.location}
          </div>
          <div className="p-2 text-lg font-serif text-slate-700 font-medium">
            <i className="fa-solid fa-calendar-days mr-1 text-orange-500 w-8"></i>
            {new Date(event?.date).toDateString()}
          </div>
        </div>
        <div
          className="p-2"
          dangerouslySetInnerHTML={{ __html: event?.details }}
        ></div>
        <div className="flex items-center justify-end my-5">
          <button
            className="bg-orange-500 px-4 py-2 rounded-sm text-white font-bold hover:bg-orange-600 m-2 disabled:bg-gray-600"
            onClick={admitToEvent}
            disabled={isAdmitted || isEnded}
          >
            {isEnded
              ? "Event ended"
              : isAdmitted
              ? "Already Admitted"
              : "Admit to Event"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
