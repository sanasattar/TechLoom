import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import TechLoomLogo07 from '../assets/TechLoomLogo07.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { path: '/web-development', label: 'Web Development' },
    { path: '/digital-marketing', label: 'Digital Marketing' },
    { path: '/graphic-design', label: 'Graphic Design' },
    { path: '/video-production', label: 'Video Production' },
    { path: '/data-analytics', label: 'Data Analytics' },
    { path: '/web-scraping', label: 'Web Scraping' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={TechLoomLogo07} 
              alt="TechLoom" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-16'
              }`}
            />
            <span className={`font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              TechLoom
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-[#29A8AB] transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`flex items-center hover:text-[#29A8AB] transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Services <FaChevronDown className="ml-1" />
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-2 text-gray-800 hover:bg-[#29A8AB] hover:text-white transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" className={`hover:text-[#29A8AB] transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              About
            </Link>
            <Link to="/contact" className={`hover:text-[#29A8AB] transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Contact
            </Link>
            
            {/* Auth Links */}
            <Link to="/login" className={`hover:text-[#29A8AB] transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Login
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-[#29A8AB] text-white px-6 py-2 rounded-lg hover:bg-[#1a6b6d] transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 animate-fadeIn">
            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</Link>
            <div className="px-4 py-2">
              <div className="font-medium text-gray-800 mb-2">Services</div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
            <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About</Link>
            <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</Link>
            <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</Link>
            <Link 
              to="/contact" 
              className="block mx-4 mt-4 bg-[#29A8AB] text-white px-6 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
