/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        circular: "circular 10s linear infinite",
      },
    },
    backgroundImage: {
      "home-image":
        "linear-gradient(to right,rgba(4, 60, 170, 1) 0% ,rgba(4, 60, 170, 0.96) 12%,rgba(4, 60, 170, 0.86) 31%,  rgba(4, 60, 170, 0.59) 54%,rgba(4, 60, 170, 0.34) 74%,rgba(4, 60, 170, 0.16) 88%,rgba(4, 60, 170, 0.11) 93%, rgba(4, 60, 170, 0) 100%), url('./assets/images/drag.jpg')",
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
