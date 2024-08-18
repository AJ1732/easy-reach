/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        circularStd: ["Circular Std", "sans-serif"],
        magnivera: ["Magnivera Trial", "sans-serif"],
        euclid: ["Euclid Circular A", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#00563B",
          600: "#00543A",
        },
        secondary: {
          500: "#D28E00",
          op: "#FFB62742",
        },
        grey: "#585858",
        dark: "#0C0C0C",
      },
    },
  },
  plugins: [],
};
