import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import TechLoomLogo07 from "../assets/TechLoomLogo07.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={TechLoomLogo07} 
                alt="TechLoom Logo" 
                className="w-16 h-16"
              />
              <span className="text-xl font-bold text-gradient">TechLoom</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Crafting captivating digital experiences that drive business growth and leave lasting impressions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#29A8AB] rounded-full flex items-center justify-center hover:bg-[#6AD6D3] transition-colors duration-300 hover:scale-110">
                <FaFacebook className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#29A8AB] rounded-full flex items-center justify-center hover:bg-[#6AD6D3] transition-colors duration-300 hover:scale-110">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#29A8AB] rounded-full flex items-center justify-center hover:bg-[#6AD6D3] transition-colors duration-300 hover:scale-110">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#29A8AB] rounded-full flex items-center justify-center hover:bg-[#6AD6D3] transition-colors duration-300 hover:scale-110">
                <FaLinkedin className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#29A8AB]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#29A8AB]">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/service/services/servicedigitalmarketing" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/service/websitedevelopment/servicewebsitedevelopment" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/service/services/servicegraphicdesigning" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link to="/service/videoediting/serivcevideoediting" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
                  Video Editing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#29A8AB]">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#29A8AB]" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#29A8AB]" />
                <span className="text-gray-300">info@techloom.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#29A8AB]" />
                <span className="text-gray-300">123 Tech Street, Digital City, DC 12345</span>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="font-semibold text-[#29A8AB] mb-2">Business Hours</h4>
              <p className="text-gray-300 text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 10:00 AM - 4:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#29A8AB] mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates, tips, and insights on digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full px-4 py-3 rounded-full bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#29A8AB] transition-colors duration-300"
              />
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#29A8AB] to-[#6AD6D3] text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 TechLoom Design. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-[#29A8AB] to-[#6AD6D3] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
