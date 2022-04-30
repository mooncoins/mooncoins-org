import Particles from "react-tsparticles";
import { useTheme } from "@mui/material/styles";

const particleStyle = {
  position: "absolute",
  width: "100%",
  height: " 100vh",
  top: 0,
};

const options = (theme) => ({
  fullScreen: false,
  background: {
    color: theme.palette.primary.dark || "#0d47a1",
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
});

const confettiOptions = (theme) => ({
  fullScreen: false,
  fpsLimit: 60,
  detectRetina: true,
  emitters: {
    startCount: 0,
    position: { x: 50, y: 50 },
    size: {
      width: 0,
      height: 0,
    },
    rate: {
      delay: 0,
      quantity: 10,
    },
    life: {
      duration: 0,
      count: 1,
    },
  },
});

export const ParticlesHero = () => {
  const theme = useTheme();
  return (
    <Particles
      style={particleStyle}
      id="tsparticles"
      options={options(theme)}
    />
  );
};
