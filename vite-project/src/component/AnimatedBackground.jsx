import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the full tsparticles package to ensure all features are available
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000",
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: ["#ff0080", "#8000ff", "#00ffff"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 5,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
