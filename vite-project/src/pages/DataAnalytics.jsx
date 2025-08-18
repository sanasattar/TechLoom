import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaBrain, FaSearch, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const DataAnalytics = () => {
  const services = [
    { icon: FaChartLine, title: 'Data Visualization', description: 'Clear insights through charts and graphs' },
    { icon: FaBrain, title: 'Predictive Analytics', description: 'Future trends and forecasting' },
    { icon: FaSearch, title: 'Data Mining', description: 'Extracting valuable patterns and insights' },
    { icon: FaRocket, title: 'Performance Tracking', description: 'KPI monitoring and optimization' },
    { icon: FaUsers, title: 'Customer Analytics', description: 'Understanding customer behavior' },
    { icon: FaLightbulb, title: 'Business Intelligence', description: 'Strategic decision support' }
  ];

  const benefits = [
    'Data-driven decision making for better results',
    'Improved operational efficiency and cost savings',
    'Better understanding of customer needs and behavior',
    'Competitive advantage through insights',
    'Predictive capabilities for future planning',
    'Measurable ROI and performance tracking'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fadeIn">
            <FaChartLine className="text-6xl text-[#29A8AB] mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
            Data <span className="text-[#29A8AB]">Analytics</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
            Transform raw data into actionable business insights that drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Data Analytics Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics solutions that turn data into your competitive advantage.
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Data Analytics Matters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data-driven insights are the key to making informed business decisions and staying ahead of the competition.
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
                <h3 className="text-2xl font-bold text-white mb-6">Our Analytics Approach</h3>
                <div className="space-y-4 text-gray-300">
                  <p>We start by understanding your business goals and data requirements.</p>
                  <p>Our team analyzes your data to uncover hidden patterns and insights.</p>
                  <p>We provide clear, actionable recommendations that drive results.</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Analytics Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach that transforms data into actionable business intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your data and objectives' },
              { step: '02', title: 'Analysis', description: 'Data processing and pattern identification' },
              { step: '03', title: 'Insights', description: 'Generating actionable recommendations' },
              { step: '04', title: 'Implementation', description: 'Supporting decision making and optimization' }
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Unlock Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's transform your data into powerful insights that drive business growth and success.
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

export default DataAnalytics;
