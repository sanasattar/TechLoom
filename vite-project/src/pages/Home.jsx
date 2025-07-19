import React, { useState, useEffect } from "react";
import Main from "./Main";
import StatsSection from "../component/StatSection";
import ParticlesComponent from "../component/ParticlesComponent";
import ServicesProvider from "../component/ServicesProvider";
import ImageSwapper from "../component/ImageSwapper";
import { FaRocket, FaLightbulb, FaUsers, FaAward, FaStar } from "react-icons/fa";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-col max-h-screen relative overflow-x-hidden">
      {/* Main Section */}
      <div>
        <Main />
      </div>

      {/* Stats Section */}
      <div className="w-full bg-gradient-to-r from-white to-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <div className={`text-center lg:text-left transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#29A8AB] mb-6">
                Crafting Digital Excellence
              </h3>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
                We transform visions into powerful digital experiences that drive growth and innovation
              </p>
            </div>

            {/* Right Side */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <StatsSection />
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Enhanced Cards */}
      <div className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-shape shape1"></div>
          <div className="floating-shape shape2"></div>
          <div className="floating-shape shape3"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Enhanced Cards */}
            <div className="space-y-6">
              {/* Card 1 */}
              <div className={`card hover-lift transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#29A8AB] to-[#6AD6D3] rounded-full flex items-center justify-center">
                      <FaRocket className="text-white text-xl" />
                    </div>
                  </div>
                                     <div>
                     <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                       Innovation at Our Core
                     </h3>
                     <p className="text-white/80 text-base md:text-lg leading-relaxed">
                       We specialize in creating cutting-edge digital solutions that combine 
                       stunning design with powerful functionality, delivering experiences 
                       that captivate and convert.
                     </p>
                   </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={`card hover-lift transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6AD6D3] to-[#29A8AB] rounded-full flex items-center justify-center">
                      <FaLightbulb className="text-white text-xl" />
                    </div>
                  </div>
                                     <div>
                     <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                       Technology That Transforms
                     </h3>
                     <p className="text-white/80 text-base md:text-lg leading-relaxed">
                       From responsive websites to custom applications, we leverage 
                       the latest technologies to create solutions that drive real 
                       business results and exceed expectations.
                     </p>
                   </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className={`card hover-lift transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#29A8AB] to-[#4FD1C7] rounded-full flex items-center justify-center">
                      <FaUsers className="text-white text-xl" />
                    </div>
                  </div>
                                     <div>
                     <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                       Partnership-Driven Success
                     </h3>
                     <p className="text-white/80 text-base md:text-lg leading-relaxed">
                       We collaborate closely with our clients to understand their vision 
                       and deliver solutions that not only meet but exceed their goals, 
                       ensuring lasting success in the digital landscape.
                     </p>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced ImageSwapper */}
            <div className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl hover:scale-105 transition-transform duration-500">
                  <ImageSwapper />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#29A8AB] rounded-full flex items-center justify-center">
                  <FaAward className="text-white text-sm" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#6AD6D3] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center py-12 md:py-20 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Particles Background */}
        <div className="absolute inset-0 -z-10">
          <ParticlesComponent />
        </div>

        {/* Services Heading */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
                     <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
             Our{" "}
             <span className="text-gradient">Services</span>
           </h2>
           <p className="text-center text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto text-white/80 leading-relaxed font-light">
             Comprehensive digital solutions designed to elevate your business
           </p>
        </div>

        {/* Services Cards */}
        <div className="w-full">
          <ServicesProvider />
        </div>
      </div>

      {/* Enhanced Testimonials Section */}
      <div className="py-16 md:py-24 bg-gradient-to-r from-gray-100 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
               Client{" "}
               <span className="text-gradient">Success Stories</span>
             </h2>
             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
               Real results from real partnerships
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "TechLoom transformed our online presence completely. Their web development services exceeded all our expectations!",
                name: "Sarah Johnson",
                position: "CEO, Digital Solutions Inc.",
                rating: 5
              },
              {
                quote: "The social media management service has increased our engagement by 300%. Absolutely incredible results!",
                name: "Michael Chen",
                position: "Marketing Director, TechStart",
                rating: 5
              },
              {
                quote: "Professional, timely, and results-driven. The video editing quality is outstanding. Highly recommend!",
                name: "Emily Rodriguez",
                position: "Creative Director, MediaPro",
                rating: 5
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`card hover-lift transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-700 text-lg mb-6 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-bold text-[#29A8AB] text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 md:py-24 bg-gradient-to-r from-[#29A8AB] to-[#6AD6D3] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-shape shape1"></div>
          <div className="floating-shape shape2"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
               Ready to Transform Your Business?
             </h2>
             <p className="text-2xl md:text-3xl text-white/90 mb-10 leading-relaxed font-light">
               Let's create something extraordinary together
             </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-[#29A8AB] font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2 text-lg"
              >
                Get Started Today
                <FaRocket className="text-sm" />
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-[#29A8AB] transition-all duration-300 flex items-center gap-2 text-lg"
              >
                Learn More About Us
                <FaUsers className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
