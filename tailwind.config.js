/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        circularStd: ["Circular Std", "sans-serif"],
        magnivera: ["Magnivera Trial", "sans-serif"],
        euclid: ["Euclid Circular A", "sans-serif"],
      },
    },
  },
  plugins: [],
}

