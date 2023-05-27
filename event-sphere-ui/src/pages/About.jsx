import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

const About = () => {
  return (
    <div>
      <Banner header="About Us" />
      <div className="mt-20 p-2">
        <div>
          {" "}
          <h2 className="uppercase text-4xl font serif  text-center">
            We{" "}
            <span className="text-orange-500 font-semibold">
              create events{" "}
            </span>
            that lasts
          </h2>
          <p className="text-xl font-serif text-center my-5">
            From Wedding Functions to Birthday Parties or Corporate Events to
            Musical Functions, We offer full range of Events Management Services
            that scale to your needs & budget.
          </p>
        </div>
      </div>
      <div className="p-2 md:flex justify-center items-end gap-10">
        <ServiceCard
          image="https://images.unsplash.com/photo-1543386650-2be9a18d2750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
          title="Our Vision"
          description="To create unforgettable experiences that captivate, connect, and inspire, while exceeding client expectations and shaping the future of event management through innovation, sustainability, and meaningful partnerships."
        />
        <ServiceCard
          image="https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          title="Our Approach"
          description="Our approach is centered around meticulous planning, seamless execution, and personalized attention, ensuring that every event we manage is a unique and exceptional experience tailored to our clients' vision and goals."
        />
        <ServiceCard
          image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          title="Our Goal"
          description="Our goal is to consistently deliver exceptional events that surpass expectations, leaving a lasting impact on attendees and creating cherished memories, while building long-term relationships based on trust, professionalism, and unparalleled service."
        />
      </div>
      <div className="flex flex-col md:flex-row mt-40 p-2 gap-10">
        <div className="flex-1 md:p-4">
          <h2 className="font-bold font-pacifico text-4xl">
            Why choose <span className="text-orange-500">Dvents?</span>
          </h2>
          <p className="text-xl font-serif font-semibold my-5">
            Choose us for our unwavering commitment to excellence, personalized
            approach, and track record of delivering flawlessly executed events
            that leave a lasting impact and exceed expectations.
          </p>

          <ul className="p-3 md:p-10">
            <li className="mb-10">
              <h2 className="text-3xl font-bold font-serif">
                {" "}
                <i className="fa-solid fa-people-line mr-5 text-orange-500"></i>{" "}
                The Events Specialists
              </h2>
              <p className="text-lg text-slate-600 font-serif my-5">
                We are the event specialists, leveraging our expertise,
                creativity, and meticulous planning to curate extraordinary
                experiences that are tailor-made to your unique vision and
                objectives.
              </p>
            </li>
            <li className="mb-10">
              <h2 className="text-3xl font-bold font-serif">
                <i className="fa-solid fa-map-location-dot mr-5 text-orange-500"></i>
                Dedicated Venues and Arrangements
              </h2>{" "}
              <p className="text-lg text-slate-600 font-serif my-5">
                With our extensive network of dedicated venues and meticulous
                arrangements, we ensure that every event is hosted in the
                perfect setting, with exceptional attention to detail and
                seamless coordination for a truly memorable experience.
              </p>
            </li>
            <li className="mb-10">
              <h2 className="text-3xl font-bold font-serif">
                <i className="fa-solid fa-holly-berry mr-5 text-orange-500"></i>
                All Types Of Events
              </h2>{" "}
              <p className="text-lg text-slate-600 font-serif my-5">
                We specialize in managing all types of events, ranging from
                corporate conferences and galas to weddings, social gatherings,
                and experiential marketing activations, leveraging our expertise
                to bring your vision to life and create unforgettable moments
                regardless of the occasion.
              </p>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-1">
          <img
            src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
