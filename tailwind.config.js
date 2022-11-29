/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "maven-regular": ["Maven Pro Regular", "sans-serif"],
        "maven-medium": ["Maven Pro Medium", "sans-serif"],
        "maven-semiBold": ["Maven Pro SemiBold", "sans-serif"],
        "maven-bold": ["Maven Pro Bold", "sans-serif"],
        "maven-extraBold": ["Maven Pro ExtraBold", "sans-serif"],
        "maven-black": ["Maven Pro Black", "sans-serif"],
      },
      colors: {
        primary: "#006633",
        secondary: "#FFCC00",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
