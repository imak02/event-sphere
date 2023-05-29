import React, { useState } from "react";

const Modal = ({ header, content, onCancel, onConfirm }) => {
  return (
    <div className="z-50  absolute p-2 top-5 left-1/2 bg-orange-100 w-80 md:w-96 shadow-md border border-orange-200">
      <div className="border-b-2 border-orange-400 p-2">
        <h2 className="text-2xl font-serif font-medium">{header}</h2>
      </div>
      <div className="p-2 text-slate-500 mt-5">
        <p>{content}</p>
      </div>
      <div className="flex justify-end gap-5 items-center p-2">
        <button
          className="bg-red-500 rounded-sm font-medium px-3 py-1 text-white"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 rounded-sm font-medium px-3 py-1 text-white"
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Modal;
