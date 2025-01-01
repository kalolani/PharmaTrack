/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStops: {
        "custom-light": "#ffffff", // Custom light color
        "custom-dark": "#00ff00", // Custom green shade
      },
      colors: {
        // Define your custom colors here
        primary: "#072032",
        secondary: "#5c6972",
        tertiary: "#fff",
        "btn-bg-main": "#ff845d",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        circular: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": {
            transform: "rotate(-360deg) translateX(100px) rotate(360deg)",
          },
        },
        dropdownOpen: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        circular: "circular 10s linear infinite",
        dropdownOpen: "dropdownOpen 0.3s ease-out forwards",
      },
    },
    backgroundImage: {
      "home-image":
        "linear-gradient(to right,rgba(4, 60, 170, 1) 0% ,rgba(4, 60, 170, 0.96) 12%,rgba(4, 60, 170, 0.86) 31%,  rgba(4, 60, 170, 0.59) 54%,rgba(4, 60, 170, 0.34) 74%,rgba(4, 60, 170, 0.16) 88%,rgba(4, 60, 170, 0.11) 93%, rgba(4, 60, 170, 0) 100%), url('./assets/images/drag.jpg')",
      "hexagon-pattern":
        "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2230%22 height=%2234%22 viewBox=%220 0 30 34%22%3E%3Cpolygon points=%2250,0 100,25 100,75 50,100 0,75 0,25%22 fill=%22%233A4F62%22 fill-opacity=%220.3%22/%3E%3C/svg%3E')",
    },

    transform: {
      "rotate-x-180": "rotateX(180deg)",
    },
    perspective: {
      1000: "1000px",
    },
  },
  plugins: [],
};
