/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {},
      darkMode: 'class', // Enable dark mode
      colors: {
        light: {
          background: '#ffffff',
          text: '#000000',
          // Add more light mode colors as needed
        },
        dark: {
          background: '#1a1a1a',
          text: '#ffffff',
          // Add more dark mode colors as needed
        },
      },
    },
    variants: {},
    plugins: [],
  };
  