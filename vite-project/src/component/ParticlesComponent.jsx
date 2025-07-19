import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = (props) => {
  // Initialize the particles engine
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadSlim(engine); // Load the slim version of the tsparticles engine
      console.log("Particles engine initialized.");
    } catch (error) {
      console.error("Error initializing particles engine:", error);
    }
  }, []);

  // Options for particles
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#245F5F", // Background color
        },
      },
      fpsLimit: 120, // Frame rate limit
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse", // Particles repel on click
          },
          onHover: {
            enable: true,
            mode: "grab", // Particles connect on hover
          },
        },
        modes: {
          push: {
            quantity: 4, // Number of particles added on click
          },
          grab: {
            distance: 150, // Grab distance for interactivity
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // Particle color
        },
        links: {
          color: "#FFFFFF", // Link color
          distance: 150, // Link distance
          enable: true,
          opacity: 0.3, // Link opacity
          width: 1, // Link width
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Bounces back on hitting edges
          },
          random: false,
          speed: 1, // Speed of particles
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Density of particles per area
          },
          value: 150, // Number of particles
        },
        opacity: {
          value: 0.8, // Opacity of particles
        },
        shape: {
          type: "circle", // Shape of particles
        },
        size: {
          value: { min: 1, max: 3 }, // Size range of particles
        },
      },
      detectRetina: true, // Adjust for high DPI screens
    }),
    []
  );

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;