import React, { useEffect, useRef, useState } from "react";
import AI from "../assets/AI.mp4";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
    }
    
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);



  return (
    <div className="overflow-hidden bg-black relative">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
      </div>

      {/* Video Section */}
      <div className="relative h-screen w-screen">
                  <video
            ref={videoRef}
            className="absolute top-0 left-0 h-full w-full object-cover opacity-30 transition-opacity duration-1000"
            src={AI}
            autoPlay
            loop
            muted
          />
        


        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 px-4 z-10">
          {/* Main Heading */}
          <div className={`text-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-center leading-tight mb-6">
              <span className="text-gradient font-extrabold">TechLoom</span>
            </h1>
            <p className="text-white/90 text-xl sm:text-2xl lg:text-3xl max-w-5xl mx-auto leading-relaxed font-light">
              Digital Excellence • Creative Innovation • Future Technology
            </p>
          </div>

          {/* Animated Subtitle */}
          <div className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-white/70 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto font-medium">
              Transforming ideas into digital reality with cutting-edge solutions
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Primary CTA */}
            <Link
              to="/services"
              className="group relative overflow-hidden bg-gradient-to-r from-[#29A8AB] to-[#6AD6D3] text-white font-bold py-5 px-10 sm:py-6 sm:px-12 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#29A8AB]/30 text-xl sm:text-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Your Journey
                <FaLongArrowAltRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6AD6D3] to-[#29A8AB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/contact"
              className="group relative overflow-hidden bg-transparent border-2 border-white text-white font-bold py-5 px-10 sm:py-6 sm:px-12 rounded-full transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black text-xl sm:text-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Get In Touch
                <FaLongArrowAltRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white/60 text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#29A8AB] rounded-full animate-pulse floating-delay-1"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#6AD6D3] rounded-full animate-pulse floating-delay-2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse floating-delay-3"></div>
      </div>
    </div>
  );
};

export default Main;
