import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaSpider, FaDatabase, FaRocket, FaShieldAlt, FaSync, FaChartBar } from 'react-icons/fa';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const WebScraping = () => {
  const services = [
    { icon: FaSpider, title: 'Data Extraction', description: 'Automated collection from websites', color: 'from-[#F59E0B] to-[#D97706]' },
    { icon: FaDatabase, title: 'Data Cleaning', description: 'Processing and organizing raw data', color: 'from-[#10B981] to-[#059669]' },
    { icon: FaRocket, title: 'Real-time Updates', description: 'Live data monitoring and updates', color: 'from-[#EF4444] to-[#DC2626]' },
    { icon: FaShieldAlt, title: 'API Integration', description: 'Seamless data pipeline integration', color: 'from-[#8B5CF6] to-[#7C3AED]' },
    { icon: FaSync, title: 'Automated Workflows', description: 'Scheduled data collection processes', color: 'from-[#6366F1] to-[#4F46E5]' },
    { icon: FaChartBar, title: 'Data Analysis', description: 'Insights from collected information', color: 'from-[#29A8AB] to-[#1a6b6d]' }
  ];

  const benefits = [
    'Access to valuable market intelligence and insights',
    'Automated data collection saves time and resources',
    'Real-time monitoring of competitors and markets',
    'Data-driven decision making capabilities',
    'Scalable solutions for growing data needs',
    'Compliance with web scraping best practices'
  ];

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
          id="tsparticles-scraping"
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
            <FaSpider className="text-6xl text-[#81E6D9] mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#E0F2FE] bg-clip-text text-transparent">
            Web <span className="text-[#81E6D9]">Scraping</span>
          </h1>
          <p className="text-xl text-[#F0FDFA] max-w-3xl mx-auto leading-relaxed">
            Extract valuable data from the web to drive informed business decisions and gain competitive advantages.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Web Scraping Services</h2>
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              Professional data extraction solutions that provide you with the information you need to succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-[#E0F2FE]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-white/10 to-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Web Scraping Matters</h2>
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              Access to the right data at the right time can give you a significant competitive edge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#81E6D9] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#E0F2FE]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Our Scraping Approach</h3>
                <div className="space-y-4 text-[#E0F2FE]">
                  <p>We use ethical scraping practices that respect website terms and robots.txt files.</p>
                  <p>Our solutions are scalable and can handle large volumes of data efficiently.</p>
                  <p>We ensure data quality and provide clean, structured information ready for analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Scraping Process</h2>
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              A systematic approach that ensures reliable and ethical data collection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analysis', description: 'Understanding your data requirements', color: 'from-[#29A8AB] to-[#1a6b6d]' },
              { step: '02', title: 'Development', description: 'Building custom scraping solutions', color: 'from-[#8B5CF6] to-[#7C3AED]' },
              { step: '03', title: 'Testing', description: 'Ensuring reliability and accuracy', color: 'from-[#10B981] to-[#059669]' },
              { step: '04', title: 'Deployment', description: 'Launching and monitoring systems', color: 'from-[#F59E0B] to-[#D97706]' }
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Extract Valuable Data?</h2>
            <p className="text-xl text-[#E0F2FE] mb-8">
              Let's build custom web scraping solutions that give you the data insights you need to succeed.
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

export default WebScraping;
