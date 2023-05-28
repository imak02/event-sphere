import axios from "axios";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EventDetails = () => {
  const params = useParams();
  const eventId = params.eventId;
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
  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <div className="my-5">
          <h1 className="font-bold font-serif text-2xl md:text-4xl text-center">
            The Conference On Global Impact of Technology on Lifestyle OF People
          </h1>
        </div>
        <div className="md:h-[70vh] p-2 ">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="event"
          />
        </div>
        <div className="py-5 flex flex-col items-start md:flex-row justify-between md:items-center">
          <div className="p-2 text-lg font-serif text-slate-700 font-medium">
            <i className="fa-solid fa-gears mr-1 text-orange-500 w-8"></i>
            Organized By: John Doe
          </div>
          <div className="p-2 text-lg font-serif text-slate-700 font-medium">
            <i className="fa-solid fa-location-dot mr-1 text-orange-500 w-8"></i>
            Kathmandu, Nepal
          </div>
          <div className="p-2 text-lg font-serif text-slate-700 font-medium">
            <i className="fa-solid fa-calendar-days mr-1 text-orange-500 w-8"></i>
            {new Date().toDateString()}
          </div>
        </div>
        <div className="p-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          laboriosam ipsum voluptatum, aliquam commodi nihil quaerat earum porro
          ea enim. Animi, qui aperiam nihil error alias quisquam quibusdam
          laborum veritatis! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Et minima fugiat, amet vero, ipsa praesentium sunt laudantium
          laborum cum aut deserunt officia possimus reiciendis blanditiis totam
          excepturi nesciunt, error animi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Possimus qui voluptatibus numquam
          similique veniam voluptatem fugiat doloremque error unde, illum
          laudantium iste ipsum officia corporis deleniti ipsa earum obcaecati.
          Unde. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          laboriosam ipsum voluptatum, aliquam commodi nihil quaerat earum porro
          ea enim. Animi, qui aperiam nihil error alias quisquam quibusdam
          laborum veritatis! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Et minima fugiat, amet vero, ipsa praesentium sunt laudantium
          laborum cum aut deserunt officia possimus reiciendis blanditiis totam
          excepturi nesciunt, error animi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Possimus qui voluptatibus numquam
          similique veniam voluptatem fugiat doloremque error unde, illum
          laudantium iste ipsum officia corporis deleniti ipsa earum obcaecati.
          Unde. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          laboriosam ipsum voluptatum, aliquam commodi nihil quaerat earum porro
          ea enim. Animi, qui aperiam nihil error alias quisquam quibusdam
          laborum veritatis! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Et minima fugiat, amet vero, ipsa praesentium sunt laudantium
          laborum cum aut deserunt officia possimus reiciendis blanditiis totam
          excepturi nesciunt, error animi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Possimus qui voluptatibus numquam
          similique veniam voluptatem fugiat doloremque error unde, illum
          laudantium iste ipsum officia corporis deleniti ipsa earum obcaecati.
          Unde. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          laboriosam ipsum voluptatum, aliquam commodi nihil quaerat earum porro
          ea enim. Animi, qui aperiam nihil error alias quisquam quibusdam
          laborum veritatis! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Et minima fugiat, amet vero, ipsa praesentium sunt laudantium
          laborum cum aut deserunt officia possimus reiciendis blanditiis totam
          excepturi nesciunt, error animi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Possimus qui voluptatibus numquam
          similique veniam voluptatem fugiat doloremque error unde, illum
          laudantium iste ipsum officia corporis deleniti ipsa earum obcaecati.
          Unde.
        </div>
        <div className="flex items-center justify-end my-5">
          <button
            className="bg-orange-500 px-4 py-2 rounded-sm text-white font-bold hover:bg-orange-600"
            onClick={admitToEvent}
          >
            Admit to Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
