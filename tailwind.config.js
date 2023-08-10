/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      blue: "#00b8d9",
      "blue-dark": "#002255",
      gray: "#999999",
    },
    extend: {},
  },
  plugins: [],
};
