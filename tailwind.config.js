/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],   
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(max-width: 1366px)' },
        'blu': { 'raw': '(max-width: 1250px)' },
        'ret': { 'raw': '(max-width: 1110px)' },
        'leg': { 'raw': '(max-width: 1024px)' },
        'alti': { 'raw': '(max-width: 660px)' },
        'yedi': { 'raw': '(max-width: 768px)' },
      },
      colors: {
        'yillik': '#8E8E8E'
      }
    },
  },
  plugins: [],
}

