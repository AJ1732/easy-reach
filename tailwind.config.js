/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        circularStd: ["CircularStd", "sans-serif"],
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
  plugins: [ fluid({
    checkSC144: false // default: true
  })],
};
