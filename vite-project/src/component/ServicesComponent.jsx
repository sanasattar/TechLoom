import React from "react";
import { Link } from "react-router-dom";
import CapCut from "../assets/CapCut.png";
import website from "../assets/website.png";
import webscraping from "../assets/webscraping.png";
import social from "../assets/social.png";
import adobephotoshopremovebg from "../assets/adobephotoshopremovebg.png";
import data from "../assets/data.png";

const ServicesComponent = () => {
  const services = [
    {
      icon: social,
      title: "Social Media Management",
      width: "80",
      path: "/services",
    },
    {
      icon: adobephotoshopremovebg,
      title: "Graphic Designing",
      width: "80",
      path: "/services",
    },
    {
      icon: CapCut,
      title: "Video Editing",
      width: "80",
      path: "/services",
    },
    {
      icon: website,
      title: "Web Development",
      width: "80",
      path: "/services",
    },
    {
      icon: webscraping,
      title: "Web Scraping",
      width: "80",
      path: "/services",
    },
    {
      title: "Data Analysis",
      icon: data,
      width: "80",
      path: "/services",
    },
  ];

  return (
    <div className="w-full h-full px-6 md:px-12">
      <div className="py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-semibold">
          We Deliver
          <span className="text-[#29A8AB] font-bold"> Excellence</span>
        </h1>
      </div>

      <div className="flex flex-col space-y-4">
        {services.map((service, index) => (
          <Link to={service.path} key={index}>
            <div className="group hover:bg-gray-200 transition-all duration-300">
              <div className="flex items-center space-x-6 py-2 px-4">
                <div className="w-24 h-24 md:w-32 md:h-32 flex justify-center items-center bg-white">
                  <img
                    src={service.icon}
                    alt={service.title}
                    width={service.width}
                  />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {service.title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
