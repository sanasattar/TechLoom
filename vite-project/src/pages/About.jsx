import React, { useCallback } from 'react';
import { FaUsers, FaAward, FaRocket, FaLightbulb } from 'react-icons/fa';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: FaUsers },
    { number: '50+', label: 'Happy Clients', icon: FaAward },
    { number: '5+', label: 'Years Experience', icon: FaRocket },
    { number: '24/7', label: 'Support Available', icon: FaLightbulb }
  ];

  const team = [
    { name: 'John Doe', role: 'CEO & Founder', initial: 'JD' },
    { name: 'Jane Smith', role: 'CTO', initial: 'JS' },
    { name: 'Mike Johnson', role: 'Lead Developer', initial: 'MJ' }
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
          id="tsparticles-about"
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
            About <span className="text-[#81E6D9]">TechLoom</span>
          </h1>
          <p className="text-xl text-[#F0FDFA] max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate innovators dedicated to transforming businesses through cutting-edge digital solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-[#E0F2FE] text-lg leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth,
                  enhance user experiences, and create lasting impact in the digital landscape.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-[#E0F2FE] text-lg leading-relaxed">
                  To be the leading force in digital transformation, setting new standards
                  for excellence in web development, design, and digital innovation.
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#81E6D9] to-[#4FD1C7] bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="text-[#F0FDFA]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-xl text-[#E0F2FE] max-w-3xl mx-auto">
              Meet the passionate professionals behind TechLoom's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-[#29A8AB] to-[#1a6b6d] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-bold">{member.initial}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#E0F2FE]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Innovation', description: 'Pushing boundaries with creative solutions', color: 'from-[#8B5CF6] to-[#7C3AED]' },
              { title: 'Excellence', description: 'Delivering quality in everything we do', color: 'from-[#10B981] to-[#059669]' },
              { title: 'Integrity', description: 'Building trust through honest partnerships', color: 'from-[#F59E0B] to-[#D97706]' },
              { title: 'Growth', description: 'Fostering continuous improvement and learning', color: 'from-[#EF4444] to-[#DC2626]' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-[#E0F2FE]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
