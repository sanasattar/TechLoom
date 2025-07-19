import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import TechLoomLogo07 from "../assets/TechLoomLogo07.png";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`w-full fixed shadow-xl z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md text-gray-800' 
        : 'bg-[#29A8AB] text-white'
    }`}>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-[#29A8AB] to-[#6AD6D3] text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-xs" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-xs" />
              <span>info@techloom.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs">Mon - Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`container mx-auto flex items-center justify-between px-4 transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-20'
      }`}>
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <img 
              className={`transition-all duration-300 ${
                isScrolled ? 'w-16 h-16' : 'w-24 md:w-32 lg:w-40'
              }`}
              src={TechLoomLogo07} 
              alt="TechLoom Logo" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`hover:text-[#29A8AB] transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Home
          </Link>
          
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className={`flex items-center hover:text-[#29A8AB] transition-colors duration-300 font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <span>Services</span>
              <FaChevronDown className={`ml-2 transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`} />
            </button>
            
                          {/* Desktop Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl py-4">
                  <div className="grid grid-cols-1 gap-1">
                    {[
                      { path: "/service/services/servicedigitalmarketing", label: "Social Media Management", icon: "📱" },
                      { path: "/service/websitedevelopment/servicewebsitedevelopment", label: "Web Development", icon: "💻" },
                      { path: "/service/webscraping/serivcewebscraping", label: "Web Scraping", icon: "🕷️" },
                      { path: "/services/dataanalysis/serivcedataanalysis", label: "Data Analysis", icon: "📊" },
                      { path: "/service/videoediting/serivcevideoediting", label: "Video Editing", icon: "🎬" },
                      { path: "service/services/servicegraphicdesigning", label: "Graphic Designing", icon: "🎨" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-center px-6 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-[#29A8AB] hover:to-[#6AD6D3] hover:text-white transition-colors duration-300"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <span className="text-xl mr-3">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
          </div>
          
          <Link 
            to="about" 
            className={`hover:text-[#29A8AB] transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            About
          </Link>
          <Link 
            to="contact" 
            className={`hover:text-[#29A8AB] transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Contact
          </Link>
          
          {/* CTA Button */}
          <Link
            to="/contact"
            className="btn-primary hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 slide-in-bottom">
          <div className="px-6 py-4 space-y-4">
            <Link 
              to="/" 
              className="block py-3 text-gray-800 hover:text-[#29A8AB] transition-colors duration-300 font-medium"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="space-y-2">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-3 text-gray-800 hover:text-[#29A8AB] transition-colors duration-300 font-medium"
              >
                <span>Services</span>
                <FaChevronDown className={`transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
                             {isDropdownOpen && (
                 <div className="ml-4 space-y-2">
                   {[
                     { path: "/service/services/servicedigitalmarketing", label: "Social Media Management", icon: "📱" },
                     { path: "/service/websitedevelopment/servicewebsitedevelopment", label: "Web Development", icon: "💻" },
                     { path: "/service/webscraping/serivcewebscraping", label: "Web Scraping", icon: "🕷️" },
                     { path: "/services/dataanalysis/serivcedataanalysis", label: "Data Analysis", icon: "📊" },
                     { path: "/service/videoediting/serivcevideoediting", label: "Video Editing", icon: "🎬" },
                     { path: "service/services/servicegraphicdesigning", label: "Graphic Designing", icon: "🎨" },
                   ].map((item, index) => (
                     <Link
                       key={index}
                       to={item.path}
                       className="flex items-center py-2 text-gray-600 hover:text-[#29A8AB] transition-colors duration-300"
                       onClick={closeMobileMenu}
                     >
                       <span className="text-lg mr-3">{item.icon}</span>
                       <span>{item.label}</span>
                     </Link>
                   ))}
                 </div>
               )}
            </div>
            
            <Link 
              to="/about" 
              className="block py-3 text-gray-800 hover:text-[#29A8AB] transition-colors duration-300 font-medium"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 text-gray-800 hover:text-[#29A8AB] transition-colors duration-300 font-medium"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            
            {/* Mobile CTA Button */}
            <Link
              to="/contact"
              className="block w-full text-center btn-primary mt-4"
              onClick={closeMobileMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
