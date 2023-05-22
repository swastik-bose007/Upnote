/** @type {import('tailwindcss').Config} */
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      beige: "#E4E6C3",
      Licorice: "#261C15",
      coral: "#F4845F",
      richBlack: "#13131B",
      eerieBlack: "#1F2022",
      grey: "#898989",
      white: "#FFFFFF"
    },
  },
  plugins: [],
};
