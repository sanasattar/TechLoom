import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Import default styles
import responsivedesign from "../assets/responsivedesign.webp";
import videoImage from "../assets/videoImage.jpg";
import webDevelopmentImage from "../assets/webDevelopmentImage.webp";

const images = [responsivedesign, videoImage, webDevelopmentImage];

const ImageSlider = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[600px] shadow-lg rounded-lg overflow-hidden">
        <Slide
          easing="ease"
          duration={5000} // Slide change every 3 seconds
          indicators // Show dots below slider
          autoplay={true} // Auto slide
          arrows={true} // Show next/prev arrows
        >
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center h-[300px]">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default ImageSlider;
