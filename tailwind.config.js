/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        museo: ['"MuseoModerno"', "cursive"],
        inter: ['"Inter"', "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
      screens: {
        xs: { max: "419px" },
        hidebuttons: { max: "958px" },
        custom: "1196px", 
      },
    },
  },
  plugins: [],
};
