import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-around min-h-screen">
      <div className="container mt-52">
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
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
