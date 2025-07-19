import React, { useEffect, useRef } from "react";
import highlevel from "../assets/highlevel.mp4";
import { Link } from "react-router-dom";
import ParticlesComponent from "../component/ParticlesComponent";
import { TbSettingsCheck } from "react-icons/tb";
import { MdEditDocument } from "react-icons/md";
import ServicesProvider from "../component/ServicesProvider";
// import ImageSwapper from "../component/ImageSwapper";

 const Services = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="h-screen w-full bg-white pt-10 relative">
      {/* <div className="absolute top-0 left-0 h-full w-full z-0"> */}
      <video
        className="h-full w-full object-cover opacity-70"
        src={highlevel}
        autoPlay
        loop
        muted
        ref={videoRef}
      />
      {/* Heading Section */}
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-8 lg:p-14">
        <h1 className="font-bold text-5xl pb-36 text-[#29A8AB] text-left">
          Our Services
        </h1>
        {/* <p className="font-bold text-base md:text-lg lg:text-xl mt-2 md:mt-4 text-white">
          Explore the range of services we offer
        </p> */}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center px-4 z-10 mb-80">
        <ul className="list-disc flex space-x-16 text-white text-2xl font-bold">
          <li className="list-inside text-[#29A8AB]">
            <Link to="/">Home</Link>
          </li>
          <li className="list-inside text-[#29A8AB]">
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>

      <hr />
      <div className="bg-gray-200 w-full flex flex-col sm:flex-row gap-5 relative">
        {/* Left Section */}
        <div className="w-full sm:w-1/2 flex-1 text-white p-6 md:p-12 lg:p-24 flex">
          <div className="min-h-[300px] text-left hover:bg-[#29A8AB] bg-[#297475] text-white rounded-3xl hover:scale-105 shadow-lg flex flex-col justify-center items-center hover:opacity-90 opacity-70 p-6 md:p-12 flex-1">
            <div className="w-32 h-32 flex justify-center items-center bg-white text-black rounded-full">
              <TbSettingsCheck className="w-14 h-14" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold py-5">What We Do</h1>
            <p className="py-5 text-lg md:text-xl text-center">
              Contour Software is a global centre serving the ever-growing needs
              of a large group of industry-specific enterprise software
              companies.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 flex-1 text-white p-6 md:p-12 lg:p-12 flex">
          <div className="min-h-[300px] hover:bg-[#29A8AB] bg-[#297475] text-white rounded-3xl hover:scale-105 shadow-md flex flex-col justify-center items-center hover:opacity-90 opacity-70 p-6 md:p-12 flex-1">
            <div className="w-32 h-32 flex justify-center items-center bg-white text-black rounded-full">
              <MdEditDocument className="w-14 h-14" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold py-5">
              Requirements We Fulfill
            </h1>
            <p className="py-5 text-lg md:text-xl text-center">
              We provide software development, maintenance, support, deployment
              and implementation services, as well as ITes Staff Augmentation
              for Systems Administration as well as full-featured G&A and S&M
              needs.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <ImageSwapper/>
      </div>
      <hr /> */}
      {/* Text Overlay on Video */}
      <div className="pt-10">
        {/* Background Particles */}
        <div className="absolute inset-0 -z-10">
          <ParticlesComponent id="particles" />
        </div>
        <div className="text-white font-bold text-2xl p-12 pl-5">
          <Link to="/services">
          <h1>We Deliver Excellence!</h1>
          </Link>
          <div className="text-lg p-5">
          <ServicesProvider/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

