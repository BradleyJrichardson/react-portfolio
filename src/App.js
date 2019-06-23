import React from "react";
import Nav from "./pages/components/Nav";
import Landing from "./pages/components/Landing";
import Projects from "./pages/components/Projects";
import { ThemeProvider } from "./pages/components/theme";
import "./global.css";
import Particles from "react-particles-js";

const particlesOptionsLight = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 3,
        color: "#000000"
      },
      polygon: {
        nb_sides: 4
      },
      image: {
        src: "img/github.svg",
        width: 50,
        height: 50
      }
    },
    opacity: {
      value: 0.5211089197812949,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
const particlesOptionsDark = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#1c2022"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 3,
        color: "#1c2022"
      },
      polygon: {
        nb_sides: 4
      },
      image: {
        src: "img/github.svg",
        width: 50,
        height: 50
      }
    },
    opacity: {
      value: 0.5211089197812949,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1c2022",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: false
};

class Index extends React.Component {
  state = {
    theme: "dark",
    particle: particlesOptionsLight,
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "dark" ? "light" : "dark",
        particle:
          theme === "dark" ? particlesOptionsDark : particlesOptionsLight
      }));
    }
  };

  render() {
    return (
      <ThemeProvider value={this.state}>
        <Particles
          className={`particles-${this.state.theme}`}
          params={this.state.particle}
        />
        <Nav />
        <div className={`wrapper ${this.state.theme}`}>
          <Landing />
          <div className="card-container">
            <Projects />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Index;
