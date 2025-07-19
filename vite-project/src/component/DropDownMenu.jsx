import React from "react";
import { Link } from "react-router-dom";

const DropDownMenu = ({ isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <div
      className="absolute  left-0 mt-2 w-96 bg-white text-black rounded-md shadow-lg z-10"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <Link to="/services/digitalmarketing" className="block px-4 py-2 hover:bg-gray-200">
        Digital Marketing & Social Media Management
      </Link>
      <Link to="/services/websitedevelopment" className="block px-4 py-2 hover:bg-gray-200">
        Website Development
      </Link>
      <Link to="/services/ios" className="block px-4 py-2 hover:bg-gray-200">
        iOS
      </Link>
      <Link to="/services/mobiledevelopment" className="block px-4 py-2 hover:bg-gray-200">
        Mobile Development
      </Link>
      <Link to="/services/appdevelopment" className="block px-4 py-2 hover:bg-gray-200">
        App Development
      </Link>
      <Link to="/services/graphicdesigning" className="block px-4 py-2 hover:bg-gray-200">
        Graphic Designing
      </Link>
      <Link to="/services/videoediting" className="block px-4 py-2 hover:bg-gray-200">
        Video Editing
      </Link>
      <Link to="/services/dataanalysis" className="block px-4 py-2 hover:bg-gray-200">
        Data Analysis
      </Link>
      <Link to="/services/webscraping" className="block px-4 py-2 hover:bg-gray-200">
        Web Scraping
      </Link>
    </div>
  );
};

export default DropDownMenu;