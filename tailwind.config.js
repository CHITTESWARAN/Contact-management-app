/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      darkseagreen: "#8fbc1f",
      aliceblue: "#f0f8ff",
      skyblue: "#87CEEB", 
    
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
      cursive: ["Luckiest Guy", "cursive"],
     
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
