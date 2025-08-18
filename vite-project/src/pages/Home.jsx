import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaPalette, FaChartLine, FaVideo, FaSpider } from 'react-icons/fa';

const Home = () => {
  const services = [
    { icon: FaCode, title: 'Web Development', path: '/web-development', color: 'from-blue-500 to-cyan-600' },
    { icon: FaPalette, title: 'Digital Marketing', path: '/digital-marketing', color: 'from-purple-500 to-pink-600' },
    { icon: FaPalette, title: 'Graphic Design', path: '/graphic-design', color: 'from-green-500 to-emerald-600' },
    { icon: FaVideo, title: 'Video Production', path: '/video-production', color: 'from-red-500 to-pink-600' },
    { icon: FaChartLine, title: 'Data Analytics', path: '/data-analytics', color: 'from-indigo-500 to-purple-600' },
    { icon: FaSpider, title: 'Web Scraping', path: '/web-scraping', color: 'from-yellow-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#29A8AB] to-[#1a6b6d] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-lg transform rotate-45 animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-white/20 rounded-full animate-pulse delay-2000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <FaRocket className="text-6xl mx-auto mb-4 animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            TechLoom
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light mb-6">
            Digital Excellence • Creative Innovation • Future Technology
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into digital reality with cutting-edge solutions that drive growth and innovation in the modern business landscape.
          </p>
          
          <div>
            <Link
              to="/services"
              className="inline-block bg-white text-[#1a6b6d] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive digital solutions that transform businesses and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">
                  Professional {service.title.toLowerCase()} services to elevate your business.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#29A8AB] to-[#1a6b6d] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something extraordinary together
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#1a6b6d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
