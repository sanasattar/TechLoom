import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaSearch, FaHashtag, FaBullseye, FaRocket, FaUsers } from 'react-icons/fa';

const DigitalMarketing = () => {
  const services = [
    { icon: FaSearch, title: 'SEO & SEM', description: 'Search engine optimization and paid advertising campaigns' },
    { icon: FaHashtag, title: 'Social Media', description: 'Strategic social media management and content creation' },
    { icon: FaChartBar, title: 'Content Marketing', description: 'Engaging content that attracts and converts audiences' },
    { icon: FaBullseye, title: 'Email Marketing', description: 'Targeted email campaigns for customer engagement' },
    { icon: FaUsers, title: 'Influencer Marketing', description: 'Partnering with influencers to expand your reach' },
    { icon: FaRocket, title: 'PPC Advertising', description: 'Pay-per-click campaigns for immediate results' }
  ];

  const benefits = [
    'Increased brand visibility and awareness',
    'Higher website traffic and lead generation',
    'Better customer engagement and retention',
    'Measurable results and ROI tracking',
    'Targeted audience reach and conversion',
    'Competitive advantage in your market'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fadeIn">
            <FaChartBar className="text-6xl text-[#29A8AB] mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideUp">
            Digital <span className="text-[#29A8AB]">Marketing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
            Strategic digital marketing solutions that grow your online presence and drive measurable business results.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing strategies tailored to your business goals and target audience.
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Digital Marketing Matters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Digital marketing provides measurable results and helps you reach your target audience effectively.
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
                <h3 className="text-2xl font-bold text-white mb-6">Our Approach</h3>
                <div className="space-y-4 text-gray-300">
                  <p>We start by understanding your business goals and target audience to create a customized digital marketing strategy.</p>
                  <p>Our data-driven approach ensures every campaign is optimized for maximum ROI and measurable results.</p>
                  <p>We provide regular reports and insights to help you track progress and make informed decisions.</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Marketing Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A strategic approach that delivers consistent results and grows your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Research', description: 'Market analysis and audience research' },
              { step: '02', title: 'Strategy', description: 'Custom marketing plan development' },
              { step: '03', title: 'Execution', description: 'Campaign implementation and management' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and scaling' }
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a digital marketing strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#29A8AB] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a6b6d] transition-colors duration-300"
              >
                Get Started Today
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

export default DigitalMarketing;
