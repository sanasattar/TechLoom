import React from "react";
import { Link } from "react-router-dom";
import social from "../assets/social.png";

const DigitalMarketing = () => {
  return (
    <div className="pt-16">
      <Link
        to="/service/services/servicedigitalmarketing"
        className=" hover:bg-[#29A8AB] bg-gray-200 text-[#29A8AB] hover:text-white rounded-3xl hover:scale-105 shadow-md flex flex-col items-center justify-start gap-3 p-4 h-auto hover:opacity-100 opacity-70"
      >
        <div className="w-24 h-24 flex text-[#29A8AB] bg-white rounded-full justify-center items-center">
          <img width={60} src={social} alt="" />
        </div>
        <h1 className="text-3xl font-bold ">Social Media Management</h1>
        <div className="leading-8">
          <h3 className="text-2xl  font-bold leading-8">
            Enhance Your Customer Experience
          </h3>
        </div>
        <Link
          to="/service/services/servicedigitalmarketing"
          className="underline leading-10 text-lg font-bold"
        >
          Learn More
        </Link>
      </Link>
    </div>
  );
};

export default DigitalMarketing;
