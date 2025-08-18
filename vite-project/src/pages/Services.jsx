import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaPalette, FaChartLine, FaVideo, FaSpider, FaRocket } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      path: '/web-development',
      features: ['Responsive Design', 'SEO Optimization', 'Performance', 'Security'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: FaPalette,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to grow your online presence',
      path: '/digital-marketing',
      features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Analytics'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: FaPalette,
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand effectively',
      path: '/graphic-design',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: FaVideo,
      title: 'Video Production',
      description: 'Professional video content that engages and converts your audience',
      path: '/video-production',
      features: ['Motion Graphics', 'Video Editing', 'Animation', 'Sound Design'],
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: FaChartLine,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights',
      path: '/data-analytics',
      features: ['Data Visualization', 'Predictive Analytics', 'Reporting', 'KPI Tracking'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: FaSpider,
      title: 'Web Scraping',
      description: 'Extract valuable data to drive informed business decisions',
      path: '/web-scraping',
      features: ['Automated Collection', 'Data Cleaning', 'Real-time Updates', 'API Integration'],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Our <span className="text-[#29A8AB]">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slideUp">
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
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white text-2xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-[#29A8AB] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-[#29A8AB] font-semibold group-hover:translate-x-2 transition-transform duration-300">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
              { step: '02', title: 'Planning', description: 'Creating a strategic roadmap for success' },
              { step: '03', title: 'Development', description: 'Building your solution with precision' },
              { step: '04', title: 'Launch', description: 'Deploying and optimizing for results' }
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
            <FaRocket className="text-6xl text-[#29A8AB] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our digital solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#29A8AB] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a6b6d] transition-colors duration-300"
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
