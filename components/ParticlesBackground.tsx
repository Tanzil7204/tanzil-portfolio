"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#050816",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#00f5ff",
          },

          links: {
            enable: true,
            color: "#00f5ff",
            distance: 150,
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: 2,
          },
        },
      }}
    />
  );
}