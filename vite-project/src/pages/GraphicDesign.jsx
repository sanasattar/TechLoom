import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaPalette, FaEye, FaLightbulb, FaRocket, FaUsers, FaStar } from 'react-icons/fa';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const GraphicDesign = () => {
  const services = [
    { icon: FaPalette, title: 'Logo Design', description: 'Unique and memorable brand identities', color: 'from-[#10B981] to-[#059669]' },
    { icon: FaEye, title: 'Brand Identity', description: 'Complete visual brand systems', color: 'from-[#8B5CF6] to-[#7C3AED]' },
    { icon: FaLightbulb, title: 'Marketing Materials', description: 'Brochures, flyers, and campaigns', color: 'from-[#F59E0B] to-[#D97706]' },
    { icon: FaRocket, title: 'UI/UX Design', description: 'User interface and experience design', color: 'from-[#EF4444] to-[#DC2626]' },
    { icon: FaUsers, title: 'Social Media Graphics', description: 'Engaging social content', color: 'from-[#6366F1] to-[#4F46E5]' },
    { icon: FaStar, title: 'Print Design', description: 'Professional print materials', color: 'from-[#29A8AB] to-[#1a6b6d]' }
  ];

  const benefits = [
    'Professional brand recognition and trust',
    'Consistent visual communication',
    'Increased customer engagement',
    'Memorable brand experiences',
    'Competitive market advantage',
    'Scalable design systems'
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
          id="tsparticles-graphic"
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
            <FaPalette className="text-6xl text-[#81E6D9] mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#E0F2FE] bg-clip-text text-transparent">
            Graphic <span className="text-[#81E6D9]">Design</span>
          </h1>
          <p className="text-xl text-[#F0FDFA] max-w-3xl mx-auto leading-relaxed">
            Creative visual solutions that communicate your brand story and captivate your audience.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Graphic Design Services</h2>
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              From concept to creation, we design visuals that make your brand unforgettable.
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Great Design Matters</h2>
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              Professional design creates lasting impressions and builds trust with your audience.
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
                <h3 className="text-2xl font-bold text-white mb-6">Our Design Process</h3>
                <div className="space-y-4 text-[#E0F2FE]">
                  <p>We start by understanding your brand, target audience, and design objectives.</p>
                  <p>Our creative team develops concepts that align with your brand identity and goals.</p>
                  <p>We refine and perfect every detail until you're completely satisfied with the result.</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Design Process</h2>
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              A creative journey that transforms ideas into stunning visual realities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your brand and goals', color: 'from-[#29A8AB] to-[#1a6b6d]' },
              { step: '02', title: 'Concept', description: 'Creative brainstorming and ideation', color: 'from-[#8B5CF6] to-[#7C3AED]' },
              { step: '03', title: 'Design', description: 'Bringing concepts to life', color: 'from-[#10B981] to-[#059669]' },
              { step: '04', title: 'Refinement', description: 'Perfecting every detail', color: 'from-[#F59E0B] to-[#D97706]' }
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl text-[#E0F2FE] mb-8">
              Let's create stunning visuals that tell your story and connect with your audience.
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

export default GraphicDesign;
