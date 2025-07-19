import React, { useEffect, useRef } from "react";
import moltivives from "../assets/moltivives.mp4"; // Replace with your web scraping video
import { Link } from "react-router-dom";
import ServicesComponent from "../component/ServicesComponent";
import database from "../assets/database.jpg"; // Replace with your web scraping image
import webscraping from "../assets/webscraping.webp"; // Replace with your image for data extraction
import datamining from "../assets/datamining.webp"

const ServiceWebScraping = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Video Section */}
      <div className="relative h-screen w-full">
        {/* Video Background */}
        <video
          className="h-full w-full object-cover bg-black opacity-90"
          src={moltivives}
          autoPlay
          loop
          muted
          ref={videoRef}
        />

        {/* Heading Section */}
        <div className="absolute inset-0 flex px-10 flex-col items-start justify-center p-4 md:p-8 lg:p-14">
          <h1 className="font-bold pb-36 text-3xl md:text-5xl text-[#29A8AB]">
            Web Scraping Services
          </h1>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center px-10 z-10 mb-80">
          <ul className="list-disc flex flex-wrap justify-center gap-6 md:gap-16 text-white text-lg md:text-2xl font-bold">
            <li className="text-[#29A8AB]">
              <Link to="/home">Home</Link>
            </li>
            <li className="text-[#29A8AB]">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-[#29A8AB]">
              <Link to="/service/webscraping/servicewebscraping">
                Web Scraping
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Service Overview
          </h2>
          <p className="text-base md:text-lg">
            We provide advanced web scraping solutions to help you gather and analyze data efficiently. Our services include data extraction, automated scraping, and custom solutions tailored to your business needs.
          </p>

          <div className="pt-6">
            <img
              className="w-full h-[40rem] rounded-2xl"
              src={webscraping}
              alt="Web Scraping Overview"
            />
          </div>

          <hr className="my-6" />

          <h1 className="text-2xl md:text-4xl font-bold"></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {[
              { title: "Data Extraction", img:database },
              { title: "Automated Scraping", img: datamining },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-gray-200 text-[#29A8AB] hover:bg-[#29A8AB] hover:text-white rounded-3xl 
                transition-all duration-300 h-96 shadow-md flex flex-col items-center p-6 hover:scale-105"
              >
                <div className="w-28 h-28 flex justify-center items-center bg-white rounded-full">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={service.img}
                    alt={service.title}
                  />
                </div>
                <h1 className="text-xl md:text-2xl py-10 font-bold mt-4">
                  {service.title}
                </h1>
                <h3 className="text-sm md:text-lg font-semibold text-center mt-2">
                  Tailored to your business needs
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Services Component */}
        <div className="w-full md:w-1/3 px-6 md:px-10">
          <ServicesComponent />
        </div>
      </div>

      {/* Focus Section */}
      <div className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Our Focus Stays On The Following
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Quality",
              desc: "We ensure the highest quality in every web scraping project.",
            },
            {
              title: "Innovation",
              desc: "We use the latest technologies to create innovative scraping solutions.",
            },
            {
              title: "Customer Focus",
              desc: "Your satisfaction is our priority, delivering tailored solutions.",
            },
          ].map((focus, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {focus.title}
              </h3>
              <p className="text-gray-600">{focus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceWebScraping;