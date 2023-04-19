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
        },
        'custom-bounce': {
          '0%, 100%': {
            'transform': 'translateX(-2%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            'transform': 'translateX(0%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 0.2, 1)'
          }
        }
      },
    },
  },
  plugins: [],
}