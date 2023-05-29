import React, { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const [users, setUsers] = useState("");
  const [events, setEvents] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const userResponse = await axios.get("/user/all");
        const eventResponse = await axios.get("/event/all");

        setUsers(userResponse.data.data);
        setEvents(eventResponse.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading)
    return (
      <div className="loading grid justify-center items-center min-h-[300px]">
        <img src="/loading.gif" className="h-[100px] " alt="spinner" />
      </div>
    );

  return (
    <div className="flex">
      <div className="hidden md:flex flex-1 shadow-md bg-orange-100 p-2">
        <Sidebar />
      </div>
      <div className="flex-[5] min-h-screen p-2 shadow-md bg-orange-50">
        <Outlet context={{ users, events }} />
      </div>
    </div>
  );
};

export default Admin;
