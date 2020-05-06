/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 75,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#6043f8"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#6043f8"
      },
      "polygon": {
        "nb_sides": 2
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.22,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.05,
        "opacity_min": 0.5,
        "sync": false
      }
    },
    "size": {
      "value": 7.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.025,
        "size_min": 5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#6043f8",
      "opacity": 0.22,
      "width": 3
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "push"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 1000,
        "size": 10,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 75,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});