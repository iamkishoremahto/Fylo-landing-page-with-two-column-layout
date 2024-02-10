/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "veryDarkBlue":"hsl(243, 87%, 12%)",
      "DesaturatedBlue":"hsl(238, 22%, 44%)",
      "BrightBlue":"hsl(224, 93%, 58%)",
      "ModerateCyan":"hsl(170, 45%, 43%)",
      "LightGrayishBlue":"hsl(240, 75%, 98%)",
      "LightGray":"hsl(0, 0%, 75%)",
      "grey":"#4c566a",
      "white":"#fff",
      "fadedBlue":"#6b9bff",
      "red":"#e01b24",
      "fadedPink":"#f8f8fe"
    },
    fontFamily: {
      "Raleway":["Raleway","sans-serif"]
    },
    backgroundImage:{
      "bgCurveMobile":"url('/images/bg-curve-mobile.svg')",
      "bgCurveDesktop":"url('/images/bg-curve-desktop.svg')"
    },
    extend: {},
  },
  plugins: [],
}

