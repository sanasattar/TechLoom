import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaPalette, FaChartLine, FaVideo, FaSpider, FaRocket } from 'react-icons/fa';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      path: '/web-development',
      features: ['Responsive Design', 'SEO Optimization', 'Performance', 'Security'],
      color: 'from-[#29A8AB] to-[#1a6b6d]'
    },
    {
      icon: FaPalette,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to grow your online presence',
      path: '/digital-marketing',
      features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Analytics'],
      color: 'from-[#8B5CF6] to-[#7C3AED]'
    },
    {
      icon: FaPalette,
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand effectively',
      path: '/graphic-design',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX'],
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      icon: FaVideo,
      title: 'Video Production',
      description: 'Professional video content that engages and converts your audience',
      path: '/video-production',
      features: ['Motion Graphics', 'Video Editing', 'Animation', 'Sound Design'],
      color: 'from-[#EF4444] to-[#DC2626]'
    },
    {
      icon: FaChartLine,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights',
      path: '/data-analytics',
      features: ['Data Visualization', 'Predictive Analytics', 'Reporting', 'KPI Tracking'],
      color: 'from-[#6366F1] to-[#4F46E5]'
    },
    {
      icon: FaSpider,
      title: 'Web Scraping',
      description: 'Extract valuable data to drive informed business decisions',
      path: '/web-scraping',
      features: ['Automated Collection', 'Data Cleaning', 'Real-time Updates', 'API Integration'],
      color: 'from-[#F59E0B] to-[#D97706]'
    }
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
          id="tsparticles-services"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#E0F2FE] bg-clip-text text-transparent">
            Our <span className="text-[#81E6D9]">Services</span>
          </h1>
          <p className="text-xl text-[#F0FDFA] max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive digital solutions that transform businesses and drive growth through innovative technology and creative excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:from-white/35 hover:to-white/25 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="text-white text-2xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-[#E0F2FE] mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-[#F0FDFA]">
                      <div className="w-2 h-2 bg-[#81E6D9] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-[#81E6D9] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and objectives', color: 'from-[#29A8AB] to-[#1a6b6d]' },
              { step: '02', title: 'Planning', description: 'Creating a strategic roadmap for success', color: 'from-[#8B5CF6] to-[#7C3AED]' },
              { step: '03', title: 'Development', description: 'Building your solution with precision', color: 'from-[#10B981] to-[#059669]' },
              { step: '04', title: 'Launch', description: 'Deploying and optimizing for results', color: 'from-[#F59E0B] to-[#D97706]' }
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
            <FaRocket className="text-6xl text-[#81E6D9] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-[#E0F2FE] mb-8">
              Let's discuss how we can help transform your business with our digital solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#29A8AB] to-[#1a6b6d] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#1a6b6d] hover:to-[#29A8AB] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
