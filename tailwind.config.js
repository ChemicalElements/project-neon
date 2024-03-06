/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

const secondary = colors.gray;

const setColor = (colorObject, defaultShade = 700) => ({
  ...colorObject,
  DEFAULT: colorObject[defaultShade],
});

export default {
  darkMode: "class",
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#357F96" },
        google: { DEFAULT: "#DB4437" },
        secondary: setColor(secondary),
      },
    },
  },
  plugins: [],
};
