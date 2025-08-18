import React from 'react';
import { Link } from 'react-router-dom';
import { FaVideo, FaFilm, FaEdit, FaPlay, FaCamera, FaMicrophone } from 'react-icons/fa';

const VideoProduction = () => {
  const services = [
    { icon: FaVideo, title: 'Video Editing', description: 'Professional post-production editing' },
    { icon: FaFilm, title: 'Motion Graphics', description: 'Dynamic animated elements' },
    { icon: FaEdit, title: 'Color Grading', description: 'Cinematic color enhancement' },
    { icon: FaPlay, title: 'Video Production', description: 'Full production from concept to delivery' },
    { icon: FaCamera, title: 'Cinematography', description: 'Professional camera work' },
    { icon: FaMicrophone, title: 'Sound Design', description: 'Audio enhancement and mixing' }
  ];

  const benefits = [
    'Professional video quality that engages viewers',
    'Increased brand awareness and recognition',
    'Higher conversion rates and engagement',
    'Professional appearance builds trust',
    'Versatile content for multiple platforms',
    'Long-lasting marketing asset'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fadeIn">
            <FaVideo className="text-6xl text-[#29A8AB] mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
            Video <span className="text-[#29A8AB]">Production</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
            Professional video content that captivates your audience and tells your story with cinematic quality.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Video Production Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to final cut, we create videos that make an impact and drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Video Content Matters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Video is the most engaging form of content and drives higher engagement rates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-slideLeft">
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
            
            <div className="animate-slideRight">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Production Approach</h3>
                <div className="space-y-4 text-gray-300">
                  <p>We start with a creative brief to understand your vision and objectives.</p>
                  <p>Our team handles everything from scripting to final delivery.</p>
                  <p>We ensure your video meets professional standards and exceeds expectations.</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Production Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures quality and meets your deadlines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Pre-Production', description: 'Planning, scripting, and storyboarding' },
              { step: '02', title: 'Production', description: 'Filming and capturing content' },
              { step: '03', title: 'Post-Production', description: 'Editing, effects, and finalization' },
              { step: '04', title: 'Delivery', description: 'Final review and delivery' }
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing Videos?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's bring your vision to life with professional video production that captivates your audience.
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

export default VideoProduction;
