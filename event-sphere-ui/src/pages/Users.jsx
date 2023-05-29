import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const Users = () => {
  const { users } = useOutletContext();

  const editUser = () => {
    console.log("Edit");
  };
  const deleteUser = async () => {
    console.log("Pressed");
  };

  return (
    <div className="flex items-center justify-center">
      <table className="table-auto border-collapse border border-slate-400">
        <thead>
          <tr className="bg-orange-100">
            <th className="border border-slate-400 p-3">Id.</th>
            <th className="border border-slate-400 p-3">Name</th>
            <th className="border border-slate-400 p-3">Email</th>
            <th className="border border-slate-400 p-3">Username</th>
            <th className="border border-slate-400 p-3">Phone</th>
            <th className="border border-slate-400 p-3">Events</th>
            <th className="border border-slate-400 p-3">Role</th>
            <th className="border border-slate-400 p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index} className="even:bg-slate-100 odd:bg-blue-100">
              <td className="border border-slate-300 p-3">{user._id}</td>
              <td className="border border-slate-300 p-3">{user.name}</td>
              <td className="border border-slate-300 p-3">{user.email}</td>
              <td className="border border-slate-300 p-3">{user.username}</td>
              <td className="border border-slate-300 p-3">{user.phone}</td>
              <td className="border border-slate-300 p-3">
                {user.events.toString()}
              </td>
              <td className="border border-slate-300 p-3">{user.role}</td>
              <td className="border border-slate-300 p-3">
                <div className="flex gap-5 justify-end items-center">
                  <i
                    className="fa-solid fa-pen-to-square text-green-500 text-xl cursor-pointer"
                    onClick={editUser}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can text-red-500 text-xl cursor-pointer"
                    onClick={deleteUser}
                  ></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
