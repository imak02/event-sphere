import React, { useEffect } from "react";
import StatsCard from "../components/StatsCard";
import { Link, useOutletContext } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const data = useOutletContext();

  return (
    <div>
      <div className="flex justify-around items-center">
        <Link to="/admin/users">
          <StatsCard
            name="Users"
            value={data?.users?.length}
            logo={<i className="fa-solid fa-users"></i>}
          />
        </Link>
        <Link to="/admin/events">
          <StatsCard
            name="Events"
            value={data.events.length}
            logo={<i className="fa-solid fa-cake-candles"></i>}
          />
        </Link>
        <Link to="/admin">
          <StatsCard
            name="Messages"
            value="1000"
            logo={<i className="fa-solid fa-envelope-open-text"></i>}
          />
        </Link>
        <Link to="/admin">
          <StatsCard
            name="Messages"
            value="1000"
            logo={<i className="fa-solid fa-envelope-open-text"></i>}
          />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
