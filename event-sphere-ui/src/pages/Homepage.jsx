import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Homepage = () => {
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

  console.log(events);

  if (loading)
    return (
      <div className="loading grid justify-center items-center min-h-[300px]">
        <img src="/loading.gif" className="h-[100px] " alt="spinner" />
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-around min-h-screen">
      <div className="container mt-52">
        <Link to="/admin/">Admin</Link>
        <div>
          <h2 className="text-3xl font-medium text-center">Popular Events</h2>
        </div>
        <div className="flex justify-center flex-wrap items-center md:gap-10 p-2 h-auto md:h-20">
          <Link to="/">
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              Business
            </p>
          </Link>
          <Link to="/">
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              Sports
            </p>
          </Link>
          <Link to="/">
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              Technology
            </p>
          </Link>
          <Link to="/">
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              Education
            </p>
          </Link>
          <Link to="/">
            <p className="text-xl font-medium p-2 hover:border hover:border-red-600 hover:text-red-600">
              Entertainment
            </p>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center  gap-4">
          {events?.map((event, index) => (
            <EventCard
              key={event._id}
              title={event.title}
              image={event.image}
              details={event.details}
              capacity={event.capacity}
              category={event.category}
              location={event.location}
              date={event.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
