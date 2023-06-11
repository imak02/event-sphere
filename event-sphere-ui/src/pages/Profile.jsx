import axios from "axios";
import React, { useEffect, useState } from "react";
import EventGridCard from "../components/EventGridCard";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("user/current-user");
        setUser(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  const userId = user._id;

  return (
    <div className="flex items-center justify-around p-10">
      {/* <div className="container p-10"> */}
      <div className="flex flex-col md:flex-row  gap-5">
        <div className="my-5 flex flex-col gap-5">
          <div className="flex items-center justify-center flex-col">
            <div className="flex self-end p-2 text-orange-400 font-bold hover:underline hover:text-blue-500">
              <Link to={`/profile/edit/${userId}`}>Edit Profile</Link>
            </div>
            <div className="h-52 w-52 rounded-full bg-orange-300 overflow-hidden my-5">
              <img
                src={`${import.meta.env.VITE_BACKEND_API}/${user?.profilePic}`}
                alt="profile"
                height="100%"
                width="100%"
              />
            </div>
            <h1 className="text-4xl font-serif font-bold ">{user.name}</h1>
          </div>
          <div className=" flex justify-center">
            <table className="w-80">
              <tbody>
                <tr className="bg-slate-100 border rounded-sm">
                  <th className="p-3 text-left">Full Name</th>
                  <td className="p-3 text-left">{user.name}</td>
                </tr>
                <tr className="bg-slate-100 border rounded-sm">
                  <th className="p-3 text-left">Email</th>
                  <td className="p-3 text-left">{user.email}</td>
                </tr>
                <tr className="bg-slate-100 border rounded-sm">
                  <th className="p-3 text-left">Username</th>
                  <td className="p-3 text-left">{user.username}</td>
                </tr>
                <tr className="bg-slate-100 border rounded-sm">
                  <th className="p-3 text-left">Phone</th>
                  <td className="p-3 text-left">{user.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {user?.events?.length > 0 && (
          <div className="flex justify-center flex-grow items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-10 text-center">
                Admitted Events
              </h2>

              <div className="flex items-center justify-around gap-20 flex-wrap">
                {user?.events?.map((event, index) => (
                  <EventGridCard
                    id={event._id}
                    key={event._id}
                    title={event.title}
                    image={event.image}
                    details={event.details}
                    capacity={event.capacity}
                    category={event.category}
                    location={event.location}
                    date={event.date}
                    organizer={event.organizer}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
