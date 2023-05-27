import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="text-left mt-10 max-w-lg">
      <div className="">
        <img src={image} alt="service" />
      </div>
      <h2 className="text-2xl font-serif font-semibold my-4">{title}</h2>
      <p className="text-lg font-serif">{description}</p>
    </div>
  );
};

export default ServiceCard;
