import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import TechLoomLogo07 from '../assets/TechLoomLogo07.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={TechLoomLogo07} alt="TechLoom" className="h-12" />
              <span className="text-xl font-bold text-[#29A8AB]">TechLoom</span>
            </div>
            <p className="text-gray-300">
              Crafting captivating digital experiences that drive business growth.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 bg-[#29A8AB] rounded-full flex items-center justify-center hover:bg-[#1a6b6d] transition-colors duration-300">
                  <Icon className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#29A8AB]">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#29A8AB]">Services</h3>
            <ul className="space-y-2">
              {[
                { path: '/web-development', label: 'Web Development' },
                { path: '/digital-marketing', label: 'Digital Marketing' },
                { path: '/graphic-design', label: 'Graphic Design' },
                { path: '/video-production', label: 'Video Production' },
                { path: '/data-analytics', label: 'Data Analytics' },
                { path: '/web-scraping', label: 'Web Scraping' }
              ].map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-300 hover:text-[#29A8AB] transition-colors duration-300">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#29A8AB]">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>+1 (555) 123-4567</p>
              <p>info@techloom.com</p>
              <p>123 Tech Street, Digital City</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© 2024 TechLoom. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#29A8AB] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#1a6b6d] transition-colors duration-300"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
