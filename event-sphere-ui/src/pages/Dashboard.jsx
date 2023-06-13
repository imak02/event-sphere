import React, { useEffect } from "react";
import StatsCard from "../components/StatsCard";
import { Link, useOutletContext } from "react-router-dom";
import axios from "axios";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const dataa = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const Dashboard = () => {
  const data = useOutletContext();

  return (
    <div className="flex flex-col h-screen">
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
        <Link to="/admin/messages">
          <StatsCard
            name="Messages"
            value={data?.messages?.length}
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

      <div style={{ width: "100%", height: 500, marginTop: 200 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={dataa}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
