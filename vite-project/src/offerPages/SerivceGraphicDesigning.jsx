import React, { useEffect, useRef } from "react";
import moltivives from "../assets/moltivives.mp4";
import { Link } from "react-router-dom";
import ServicesComponent from "../component/ServicesComponent";
import chilli from "../assets/chilli.png"
import veg from "../assets/veg.jpg"; 
import design1 from "../assets/design1.png"; 
import vegs from "../assets/vegs.png"; 

const SerivceGraphicDesigning = () => {

   const videoRef = useRef(null);
  
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.1;
        videoRef.current.play();
      }
    }, []);
  return (
    <div className="flex flex-col w-full overflow-y-auto">
      {/* Video Section */}
      <div className="relative h-screen w-full">
        {/* Video Background */}
        <div className="h-full w-full object-cover bg-black opacity-90">
           <video
                   className="h-full w-full object-cover bg-black opacity-90"
                   src={moltivives}
                   autoPlay
                   loop
                   muted
                   ref={videoRef}
                 />
        </div>

        {/* Heading Section */}
        <div className="absolute inset-0 flex px-10 flex-col items-start justify-center p-4 md:p-8 lg:p-14">
          <h1 className="font-bold pb-36 text-3xl md:text-5xl text-[#29A8AB]">
            Creative Design Solutions
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
              <Link to="/service/graphicdesigning/serivcegraphicdesigning">
                Graphic Designing
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Service <span className="text-[#29A8AB]">Overview</span>
          </h2>
          <p className="text-sm leading-8 md:text-lg md:leading-10">
            We specialize in creating visually stunning and impactful designs that
            resonate with your audience. Our expert team combines creativity with
            technical expertise to deliver designs that elevate your brand and
            communicate your message effectively. From branding to digital
            illustrations, we ensure every design is tailored to meet your unique
            needs.
          </p>

          <div className="pt-6">
            <img
              className="w-full h-80 rounded-2xl"
              src={chilli} // Replace with your image
              alt="Graphic Design Overview"
            />
          </div>

          <hr className="my-10" />

          <h1 className="text-2xl md:text-4xl font-bold p-10">
            Our Focus Types On The{" "}
            <span className="text-[#29A8AB]">Following</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2 p-24">
            {[
              {
                title: "Branding",
                img: veg,
                description:
                  "Crafting unique brand identities that stand out in the market. From logos to brand guidelines, we ensure consistency across all platforms.",
              },
              {
                title: "Illustrations",
                 img: design1,
                description:
                  "Creating custom illustrations that bring your ideas to life. Perfect for digital media, books, and marketing campaigns.",
              },
              {
                title: "Print Design",
                 img: vegs,
                description:
                  "Designing print-ready materials such as brochures, posters, and business cards that leave a lasting impression.",
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-gray-200 min-h-full text-[#29A8AB] hover:bg-[#29A8AB] hover:text-white rounded-3xl transition-all duration-300 shadow-md flex flex-col items-start p-16 hover:scale-105"
              >
                <div className="w-28 h-28 flex justify-center items-center bg-white rounded-full">
                  <img
                    className="w-14 h-14"
                    src={service.img}
                    alt={service.title}
                  />
                </div>
                <h1 className="text-xl md:text-2xl text-center font-bold mt-7">
                  {service.title}
                </h1>
                <p className="text-center mt-4 text-[#29A8AB] group-hover:text-white text-sm leading-6 md:text-lg md:leading-6">
                  {service.description}
                </p>
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
              title: "Creativity",
              desc: "We prioritize innovative and unique designs that captivate your audience.",
            },
            {
              title: "Quality",
              desc: "Every design is crafted with precision and attention to detail.",
            },
            {
              title: "Client-Centric",
              desc: "Your vision is our priority, ensuring designs that align with your goals.",
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

export default SerivceGraphicDesigning;