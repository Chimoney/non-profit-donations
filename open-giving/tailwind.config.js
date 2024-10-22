/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8A2BE2', // Adding your primary color here
      },
      fontFamily: {
        primary: ['Source Sans 3', 'sans-serif'], // Adding your primary font here
      },
    },
  },
  plugins: [],
};
