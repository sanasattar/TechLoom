import React from 'react';
import { FaUsers, FaAward, FaRocket, FaLightbulb } from 'react-icons/fa';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            About <span className="text-[#29A8AB]">TechLoom</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slideUp">
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-slideLeft">
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth,
                  enhance user experiences, and create lasting impact in the digital landscape.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-slideLeft delay-200">
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the leading force in digital transformation, setting new standards
                  for excellence in web development, design, and digital innovation.
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 animate-slideRight" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-4xl font-bold text-[#29A8AB] mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the passionate professionals behind TechLoom's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-24 h-24 bg-[#29A8AB] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">{member.initial}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
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
              { title: 'Innovation', description: 'Pushing boundaries with creative solutions' },
              { title: 'Excellence', description: 'Delivering quality in everything we do' },
              { title: 'Integrity', description: 'Building trust through honest partnerships' },
              { title: 'Growth', description: 'Fostering continuous improvement and learning' }
            ].map((value, index) => (
              <div key={index} className="text-center animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 bg-[#29A8AB] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
