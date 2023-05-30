import React from "react";
import { useOutletContext } from "react-router-dom";

const Messages = () => {
  const { messages } = useOutletContext();

  const editMessage = () => {
    console.log("Edit");
  };
  const deleteMessage = async () => {
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
            <th className="border border-slate-400 p-3">Phone</th>
            <th className="border border-slate-400 p-3">Message</th>
            <th className="border border-slate-400 p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages?.map((message, index) => (
            <tr key={index} className="even:bg-slate-100 odd:bg-blue-100">
              <td className="border border-slate-300 p-3">{message._id}</td>
              <td className="border border-slate-300 p-3">{message.name}</td>
              <td className="border border-slate-300 p-3">{message.email}</td>
              <td className="border border-slate-300 p-3">{message.phone}</td>
              <td className="border border-slate-300 p-3">{message.message}</td>
              <td className="border border-slate-300 p-3">
                <div className="flex gap-5 justify-end items-center">
                  <i
                    className="fa-solid fa-pen-to-square text-green-500 text-xl cursor-pointer"
                    onClick={editMessage}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can text-red-500 text-xl cursor-pointer"
                    onClick={deleteMessage}
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

export default Messages;
