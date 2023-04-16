/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xm': { 'max': '639px' },
      'sm': { 'min': '640px', },

    },
    extend: {
      keyframes: {
        'magic': {

          'to': { 'transform': 'rotate(360deg)' },
        },
        'magic2': {

          'to': { 'transform': 'rotate(-360deg)' },
        }
      },
    },
  },
  plugins: [],
}