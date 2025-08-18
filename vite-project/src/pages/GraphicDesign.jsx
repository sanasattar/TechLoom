import React from 'react';
import { Link } from 'react-router-dom';
import { FaPalette, FaEye, FaLightbulb, FaRocket, FaUsers, FaStar } from 'react-icons/fa';

const GraphicDesign = () => {
  const services = [
    { icon: FaPalette, title: 'Logo Design', description: 'Unique and memorable brand identities' },
    { icon: FaEye, title: 'Brand Identity', description: 'Complete visual brand systems' },
    { icon: FaLightbulb, title: 'Marketing Materials', description: 'Brochures, flyers, and campaigns' },
    { icon: FaRocket, title: 'UI/UX Design', description: 'User interface and experience design' },
    { icon: FaUsers, title: 'Social Media Graphics', description: 'Engaging social content' },
    { icon: FaStar, title: 'Print Design', description: 'Professional print materials' }
  ];

  const benefits = [
    'Professional brand recognition and trust',
    'Consistent visual communication',
    'Increased customer engagement',
    'Memorable brand experiences',
    'Competitive market advantage',
    'Scalable design systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <FaPalette className="text-6xl text-[#29A8AB] mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Graphic <span className="text-[#29A8AB]">Design</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Creative visual solutions that communicate your brand story and captivate your audience.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Graphic Design Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to creation, we design visuals that make your brand unforgettable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-[#29A8AB] rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Great Design Matters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional design creates lasting impressions and builds trust with your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#29A8AB] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Design Process</h3>
                <div className="space-y-4 text-gray-300">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A creative journey that transforms ideas into stunning visual realities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your brand and goals' },
              { step: '02', title: 'Concept', description: 'Creative brainstorming and ideation' },
              { step: '03', title: 'Design', description: 'Bringing concepts to life' },
              { step: '04', title: 'Refinement', description: 'Perfecting every detail' }
            ].map((process, index) => (
              <div key={index} className="text-center">
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create stunning visuals that tell your story and connect with your audience.
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

export default GraphicDesign;
