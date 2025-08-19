import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaRocket, FaShieldAlt, FaSearch, FaUsers } from 'react-icons/fa';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

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

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded callback
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#29A8AB] via-[#1a6b6d] to-[#0F766E] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-center overflow-hidden">
        {/* Particles Background */}
        <Particles
          id="tsparticles-webdev"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            particles: {
              number: { value: 60, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              opacity: { value: 0.3, random: false },
              size: { value: 3, random: true },
              line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
              move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
              detect_on: "canvas",
              events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
              modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
          }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
        />
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <FaCode className="text-6xl text-[#81E6D9] mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#E0F2FE] bg-clip-text text-transparent">
            Web <span className="text-[#81E6D9]">Development</span>
          </h1>
          <p className="text-xl text-[#F0FDFA] max-w-3xl mx-auto leading-relaxed">
            Custom websites and web applications built with cutting-edge technologies to drive your business forward.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Web Development?</h2>
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              We combine technical expertise with creative design to deliver websites that convert visitors into customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#29A8AB] to-[#1a6b6d] rounded-lg mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#E0F2FE]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-white/10 to-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              We stay current with the latest technologies to deliver modern, scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30 hover:from-white/35 hover:to-white/25 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#81E6D9] to-[#4FD1C7] bg-clip-text text-transparent">{tech}</div>
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
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              A systematic approach that ensures quality and meets your deadlines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business goals and requirements', color: 'from-[#29A8AB] to-[#1a6b6d]' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and wireframes', color: 'from-[#8B5CF6] to-[#7C3AED]' },
              { step: '03', title: 'Development', description: 'Building your website with clean, efficient code', color: 'from-[#10B981] to-[#059669]' },
              { step: '04', title: 'Launch', description: 'Testing, deployment, and post-launch support', color: 'from-[#F59E0B] to-[#D97706]' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-2xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-[#E0F2FE]">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm rounded-2xl p-12 border border-white/30 shadow-lg">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-[#E0F2FE] mb-8">
              Let's discuss your project and create a website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#29A8AB] to-[#1a6b6d] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#1a6b6d] hover:to-[#29A8AB] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-[#29A8AB] text-[#29A8AB] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gradient-to-r hover:from-[#29A8AB] hover:to-[#1a6b6d] hover:text-white transition-all duration-300"
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
