import { Link, NavLink, useLocation } from "react-router-dom";
import EventCard from "../components/EventCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Carousel from "../components/Carousel";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import Gallery from "../components/Gallery";

const Homepage = () => {
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
    <div className="flex flex-col items-center justify-around min-h-screen">
      <Banner />
      <div className="mt-20 max-w-3xl p-3">
        <h2 className="text-3xl md:text-5xl text-center mb-10 font-bold font-pacifico">
          Welcome to <span className="text-orange-500">Dvents</span>
        </h2>
        <h5 className="text-lg text-center font-bold font-serif">
          From Wedding Functions to Birthday Parties or Corporate Events to
          Musical Functions, We offer full range of Events Management Services
          that scale to your needs & budget.
        </h5>
      </div>

      <Carousel />

      <div className="mt-20 p-3 container">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-pacifico">
            <span className="text-orange-500">Dvents</span> Services
          </h2>
          <h4 className="text-lg font-bold font-serif mt-3">
            We make your events smart & impactful by personalised event
            management services
          </h4>
        </div>

        <div className="md:flex md:flex-wrap md:gap-x-40 md:gap-y-20 md:items-center md:justify-center">
          <ServiceCard
            title="Social Events"
            description="Transforming your social gatherings into unforgettable moments, our
        event management company weaves magic, bringing people together in
        celebration."
            image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <ServiceCard
            title="Corporate Seminars"
            description="Unleash the power of your corporate seminars with our event management prowess, delivering seamless organization and unforgettable experiences that inspire success."
            image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <ServiceCard
            title="Wedding"
            description="Let us weave the wedding of your dreams with our event management expertise, creating an enchanting celebration filled with love, joy, and cherished memories that will last a lifetime."
            image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          />
          <ServiceCard
            title="Birthday Parties"
            description="From candles to confetti, let our event management team create a birthday party that sparkles with joy, laughter, and unforgettable moments."
            image="https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
      </div>

      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default Homepage;
