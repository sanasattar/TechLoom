import React, { useState, useEffect } from 'react'
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaArrowRight, FaStar, FaUsers, FaClock } from "react-icons/fa";
import adobephotoshopremovebg from "../assets/adobephotoshopremovebg.png";
import social from "../assets/social.png";
import CapCut from "../assets/CapCut.png";
import website from "../assets/website.png";
import webscraping from "../assets/webscraping.png";
import { Link } from 'react-router-dom';

const ServicesProvider = () => {
  const [visibleServices, setVisibleServices] = useState([]);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: "Social Media Management",
      img: social,
      link: "/service/services/servicedigitalmarketing",
      description: "Boost your brand presence across all social platforms",
      features: ["Content Creation", "Community Management", "Analytics & Reporting"],
      icon: "📱",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Web Development",
      img: website,
      link: "/service/websitedevelopment/servicewebsitedevelopment",
      description: "Custom websites that convert visitors into customers",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      icon: "💻",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Graphic Designing",
      img: adobephotoshopremovebg,
      link: "/service/services/servicegraphicdesigning",
      description: "Stunning visuals that tell your brand story",
      features: ["Logo Design", "Brand Identity", "Marketing Materials"],
      icon: "🎨",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Video Editing",
      img: CapCut,
      link: "/service/videoediting/serivcevideoediting",
      description: "Professional video content that engages your audience",
      features: ["Motion Graphics", "Color Grading", "Sound Design"],
      icon: "🎬",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Data Analysis",
      icon: <MdOutlineScreenSearchDesktop className="w-10 h-10 text-[#29A8AB]" />,
      link: "/services/dataanalysis/serivcedataanalysis",
      description: "Transform data into actionable business insights",
      features: ["Data Visualization", "Predictive Analytics", "Performance Tracking"],
      iconText: "📊",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Web Scraping",
      img: webscraping,
      link: "/service/webscraping/serivcewebscraping",
      description: "Extract valuable data to drive informed decisions",
      features: ["Automated Collection", "Data Cleaning", "Real-time Updates"],
      icon: "🕷️",
      color: "from-yellow-500 to-orange-600"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleServices(services.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="p-4 md:p-6 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                visibleServices.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <Link
                to={service.link}
                className="group relative block"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Service Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon/Image Section */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          {service.icon ? (
                            <span className="text-4xl">{service.icon}</span>
                          ) : service.iconText ? (
                            <span className="text-4xl">{service.iconText}</span>
                          ) : (
                            <img
                              className="w-12 h-12 object-contain"
                              src={service.img}
                              alt={service.title}
                            />
                          )}
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#29A8AB] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <FaStar className="text-white text-xs" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800 group-hover:text-[#29A8AB] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6 space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-[#29A8AB] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-center space-x-2 text-[#29A8AB] font-semibold group-hover:scale-105 transition-transform duration-300">
                        <span>Learn More</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#29A8AB]/5 to-[#6AD6D3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#29A8AB] via-[#6AD6D3] to-[#29A8AB] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

                 {/* Bottom CTA Section */}
         <div className="text-center mt-12 slide-in-bottom">
           <div className="bg-gradient-to-r from-[#29A8AB] to-[#6AD6D3] rounded-2xl p-10 md:p-16 text-white">
             <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
               Ready to Elevate Your Brand?
             </h3>
             <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
               Let's create something that sets you apart from the competition
             </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                             <Link
                 to="/contact"
                 className="bg-white text-[#29A8AB] font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-3 text-lg"
               >
                 <FaUsers className="text-lg" />
                 Start Your Project
               </Link>
               <Link
                 to="/about"
                 className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-[#29A8AB] transition-all duration-300 flex items-center gap-3 text-lg"
               >
                 <FaClock className="text-lg" />
                 Learn More
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesProvider