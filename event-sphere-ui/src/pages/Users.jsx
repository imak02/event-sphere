import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/user/all");
        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (loading)
    return (
      <div className="loading grid justify-center items-center min-h-[300px]">
        <img src="/loading.gif" className="h-[100px] " alt="spinner" />
      </div>
    );

  return (
    <div className="flex items-center justify-center">
      <table className="bg-slate-500">
        <thead>
          <tr>
            <th>Id.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Events</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <th>{user._id}</th>
              <th>{user.name}</th>
              <th>{user.email}</th>
              <th>{user.username}</th>
              <th>{user.phone}</th>
              <th>{user.events.toString()}</th>
              <th>{user.role}</th>
              <th>icons</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
