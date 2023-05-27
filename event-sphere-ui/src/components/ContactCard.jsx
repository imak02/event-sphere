import React from "react";

const ContactCard = ({ name, value, logo }) => {
  return (
    <div className="mt-10">
      <div className="border border-orange-600 bg-gradient-to-br from-[#fc4a1a] to-[#f7b733] rounded-br-3xl rounded-tl-3xl h-56 relative px-10 py-5 w-[340px]">
        <div className="flex flex-col text-white">
          {logo}
          <h4 className="text-lg font-semibold font-serif my-5">{name}</h4>
          <h2 className="font-bold text-xl font-serif">{value}</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
