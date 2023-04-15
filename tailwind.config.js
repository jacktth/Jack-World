/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { screens: {
    'xm': {'max': '639px'},
    'sm': {'min': '640px', },
 
  },
    extend: {backgroundImage: {
      'magic': "linear-gradient(132deg, #5ddcff, #3c67e3 43%, #4e00c2)",
   },},
  },
  plugins: [],
}