/** @type {import('tailwindcss').Config} */
const withMt = require("@material-tailwind/react/utils/withMT")


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-digolinha': 'black'
      }
    },
  },
  plugins: [],
}