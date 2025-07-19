import React, { useState, useEffect } from 'react';
import { FaUsers, FaProjectDiagram, FaAward, FaSmile } from 'react-icons/fa';

const StatSection = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    awards: 0,
    satisfaction: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: <FaUsers className="text-3xl md:text-4xl" />,
      count: 500,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <FaProjectDiagram className="text-3xl md:text-4xl" />,
      count: 1000,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <FaAward className="text-3xl md:text-4xl" />,
      count: 50,
      suffix: '+',
      label: 'Awards Won',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <FaSmile className="text-3xl md:text-4xl" />,
      count: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'from-pink-500 to-purple-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounts();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const animateCounts = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const targetCount = stat.count;
      const increment = targetCount / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
          currentCount = targetCount;
          clearInterval(timer);
        }

        setCounts(prev => ({
          ...prev,
          [Object.keys(counts)[index]]: Math.floor(currentCount)
        }));
      }, stepDuration);
    });
  };

  return (
    <div className="stats-section w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center p-4 md:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Icon */}
            <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
              {stat.icon}
            </div>

            {/* Count */}
            <div className="mb-2">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                {counts[Object.keys(counts)[index]]}
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#29A8AB]">
                {stat.suffix}
              </span>
            </div>

            {/* Label */}
            <p className="text-sm md:text-base font-semibold text-gray-600">
              {stat.label}
            </p>

            {/* Animated Border */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 hover:opacity-10 transition-opacity duration-500`}></div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className={`text-center mt-8 transition-all duration-1000 delay-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Trusted by businesses worldwide to deliver exceptional digital solutions
        </p>
      </div>
    </div>
  );
};

export default StatSection;
