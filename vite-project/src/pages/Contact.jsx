import React, { useState, useCallback } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: FaPhone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: FaEnvelope, label: 'Email', value: 'info@techloom.com' },
    { icon: FaMapMarkerAlt, label: 'Address', value: '123 Tech Street, Digital City, DC 12345' },
    { icon: FaClock, label: 'Business Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM' }
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
          id="tsparticles-contact"
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
            Get in <span className="text-[#81E6D9]">Touch</span>
          </h1>
          <p className="text-xl text-[#F0FDFA] max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can help transform your business with our digital solutions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#E0F2FE] mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gradient-to-r from-[#1a6b6d]/80 to-[#0F766E]/80 border border-white/40 rounded-lg text-white placeholder-[#E0F2FE] focus:outline-none focus:border-[#81E6D9] focus:ring-2 focus:ring-[#81E6D9]/20 focus:bg-gradient-to-r focus:from-[#1a6b6d] focus:to-[#0F766E] transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#E0F2FE] mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gradient-to-r from-[#1a6b6d]/80 to-[#0F766E]/80 border border-white/40 rounded-lg text-white placeholder-[#E0F2FE] focus:outline-none focus:border-[#81E6D9] focus:ring-2 focus:ring-[#81E6D9]/20 focus:bg-gradient-to-r focus:from-[#1a6b6d] focus:to-[#0F766E] transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[#E0F2FE] mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#1a6b6d]/80 to-[#0F766E]/80 border border-white/40 rounded-lg text-white placeholder-[#E0F2FE] focus:outline-none focus:border-[#81E6D9] focus:ring-2 focus:ring-[#81E6D9]/20 focus:bg-gradient-to-r focus:from-[#1a6b6d] focus:to-[#0F766E] transition-all duration-300"
                    placeholder="Project Type"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[#E0F2FE] mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#1a6b6d]/80 to-[#0F766E]/80 border border-white/40 rounded-lg text-white placeholder-[#E0F2FE] focus:outline-none focus:border-[#81E6D9] focus:ring-2 focus:ring-[#81E6D9]/20 focus:bg-gradient-to-r focus:from-[#1a6b6d] focus:to-[#0F766E] transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#29A8AB] to-[#1a6b6d] text-white py-4 rounded-lg font-semibold text-lg hover:from-[#1a6b6d] hover:to-[#29A8AB] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <FaPaperPlane />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#29A8AB] to-[#1a6b6d] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.label}</h3>
                      <p className="text-[#E0F2FE]">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Facebook', color: 'from-[#1877F2] to-[#0D6EFD]' },
                    { name: 'Twitter', color: 'from-[#1DA1F2] to-[#0EA5E9]' },
                    { name: 'Instagram', color: 'from-[#E4405F] to-[#DC2626]' },
                    { name: 'LinkedIn', color: 'from-[#0A66C2] to-[#0284C7]' }
                  ].map((platform, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <span className="text-white text-sm font-medium">{platform.name[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-[#E0F2FE]">Come see us in person and discuss your project</p>
          </div>
          
          <div className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 text-center shadow-lg">
            <div className="w-full h-64 bg-gradient-to-br from-[#64748B] to-[#475569] rounded-lg mb-6 flex items-center justify-center">
              <span className="text-[#E0F2FE]">Interactive Map Coming Soon</span>
            </div>
            <p className="text-[#E0F2FE]">
              <strong>Address:</strong> 123 Tech Street, Digital City, DC 12345<br />
              <strong>Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
