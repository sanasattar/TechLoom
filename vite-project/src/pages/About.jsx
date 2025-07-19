import React, { useEffect, useRef } from "react";
import midLevel from "../assets/midLevel.mp4";
import { Link } from "react-router-dom";

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
    }
  }, []);
  return (
    <div className="App h-screen relative text-white pt-16">
      <div className="relative h-screen bg-black ">
        <div className="absolute top-0 left-0 h-full w-full">
          <video
            className="h-full w-full object-cover opacity-70"
            src={midLevel}
            autoPlay
            loop
            muted
            ref={videoRef}
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center px-4 z-10 mb-80 space-x-8">
          <div className="text-2xl font-bold">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </div>
          <div className="text-2xl font-bold">
            <Link to="/about" className="text-white hover:underline">
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative bg-white rounded-lg shadow-lg p-8 mt-8 max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600">
            We are a passionate team committed to providing the best services to
            help businesses grow. With years of experience in our respective
            fields, we aim to create innovative solutions that drive results and
            bring success to our clients.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            Our mission is to empower businesses by delivering cutting-edge
            solutions that not only solve problems but also add significant
            value. We strive for excellence, innovation, and reliability in
            everything we do.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600">
            Our vision is to become a leader in the industry, known for our
            creativity, dedication, and commitment to helping businesses grow
            and thrive. We envision a future where our solutions drive positive
            change and create lasting impact.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Values
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
            <li>
              Integrity: We believe in honesty and transparency in all our
              interactions.
            </li>
            <li>
              Collaboration: We value teamwork and work closely with our clients
              to achieve success.
            </li>
            <li>
              Innovation: We are always looking for new ways to improve and
              evolve.
            </li>
            <li>
              Excellence: We strive to deliver the highest quality in everything
              we do.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
