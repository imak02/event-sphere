import React from "react";

const StatsCard = ({ name, value, logo }) => {
  return (
    <div className="border rounded-2xl h-40 bg-slate-100 relative px-10 py-5 w-80 text-black hover:text-orange-500">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-5xl mb-4">{logo}</div>
        <h4 className="text-2xl font-semibold font-serif">{name}</h4>
        <h2 className="font-bold text-xl font-serif">{value}</h2>
      </div>
    </div>
  );
};

export default StatsCard;
