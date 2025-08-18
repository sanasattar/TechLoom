import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaRocket, FaShieldAlt, FaSearch, FaUsers } from 'react-icons/fa';

const WebDevelopment = () => {
  const features = [
    { icon: FaMobile, title: 'Responsive Design', description: 'Mobile-first approach ensuring perfect display on all devices' },
    { icon: FaRocket, title: 'Fast Performance', description: 'Optimized code and assets for lightning-fast loading speeds' },
    { icon: FaShieldAlt, title: 'Security First', description: 'Built-in security measures to protect your data and users' },
    { icon: FaSearch, title: 'SEO Optimized', description: 'Search engine friendly code structure for better rankings' },
    { icon: FaUsers, title: 'User Experience', description: 'Intuitive navigation and engaging user interfaces' },
    { icon: FaCode, title: 'Clean Code', description: 'Maintainable and scalable code architecture' }
  ];

  const technologies = ['React', 'Node.js', 'Python', 'PHP', 'WordPress', 'Shopify', 'Laravel', 'Django'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fadeIn">
            <FaCode className="text-6xl text-[#29A8AB] mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
            Web <span className="text-[#29A8AB]">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
            Custom websites and web applications built with cutting-edge technologies to drive your business forward.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Web Development?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with creative design to deliver websites that convert visitors into customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-[#29A8AB] rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stay current with the latest technologies to deliver modern, scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slideUp" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="text-2xl font-bold text-[#29A8AB]">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures quality and meets your deadlines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business goals and requirements' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and wireframes' },
              { step: '03', title: 'Development', description: 'Building your website with clean, efficient code' },
              { step: '04', title: 'Launch', description: 'Testing, deployment, and post-launch support' }
            ].map((process, index) => (
              <div key={index} className="text-center animate-slideUp" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-20 h-20 bg-[#29A8AB] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and create a website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#29A8AB] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a6b6d] transition-colors duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-[#29A8AB] text-[#29A8AB] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#29A8AB] hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
