import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSwapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      alt: "Data Analysis",
      title: "Data Analysis",
      description: "Transform raw data into actionable insights"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Web Development",
      title: "Web Development",
      description: "Build stunning, responsive websites"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      alt: "Graphic Design",
      title: "Graphic Design",
      description: "Create compelling visual identities"
    },
    {
      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Digital Marketing",
      title: "Digital Marketing",
      description: "Drive growth with strategic marketing"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };



  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative w-full h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden transition-all duration-1000 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}>
      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {image.title}
              </h3>
              <p className="text-lg md:text-xl opacity-90">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

              {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="text-sm md:text-base" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="text-sm md:text-base" />
          </button>
        </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentIndex + 1) / images.length) * 100}%` 
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4">
        <div className="w-8 h-8 bg-[#29A8AB] rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white text-xs font-bold">
            {currentIndex + 1}/{images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSwapper;
