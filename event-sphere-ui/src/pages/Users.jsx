import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const Users = () => {
  const { users } = useOutletContext();

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
