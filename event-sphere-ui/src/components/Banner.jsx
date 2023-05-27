import React from "react";

const Banner = () => {
  return (
    <div className="bg-[linear-gradient(to_right_bottom,rgba(0,0,1,0.8),rgba(0,0,1,0.8)),url('https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/bg-1-1.jpg')] w-screen h-[80vh] bg-center bg-cover relative">
      <h1 className="text-4xl md:text-7xl uppercase absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center text-white font-bold w-screen">
        Celebrate your events that lasts longer
      </h1>
      <h3 className="text-xl font-bold text-white italic absolute top-[70%] left-[50%] translate-x-[-50%] w-screen text-center">
        - We are the event management specialists.
      </h3>
    </div>
  );
};

export default Banner;
