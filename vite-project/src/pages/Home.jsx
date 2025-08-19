import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaCode,
  FaPalette,
  FaChartLine,
  FaVideo,
  FaSpider,
} from "react-icons/fa";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const Home = () => {
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      path: "/web-development",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: FaPalette,
      title: "Digital Marketing",
      path: "/digital-marketing",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: FaPalette,
      title: "Graphic Design",
      path: "/graphic-design",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaVideo,
      title: "Video Production",
      path: "/video-production",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: FaChartLine,
      title: "Data Analytics",
      path: "/data-analytics",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: FaSpider,
      title: "Web Scraping",
      path: "/web-scraping",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded callback
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#29A8AB] to-[#1a6b6d] overflow-hidden">
        {/* Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.3,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <FaRocket className="text-6xl mx-auto mb-4 animate-bounce" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">TechLoom</h1>

          <h2 className="text-2xl md:text-4xl font-light mb-6">
            Digital Excellence • Creative Innovation • Future Technology
          </h2>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into digital reality with cutting-edge solutions
            that drive growth and innovation in the modern business landscape.
          </p>

          <div>
            <Link
              to="/services"
              className="inline-block bg-white text-[#1a6b6d] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-[#29A8AB] to-[#1a6b6d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-50 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-50 max-w-3xl mx-auto">
              We deliver comprehensive digital solutions that transform
              businesses and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  Professional {service.title.toLowerCase()} services to elevate
                  your business.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#29A8AB] to-[#1a6b6d] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something extraordinary together
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#1a6b6d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
