/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: {
        50: "#fdf6ee",
        100: "#f7e4cf",
        200: "#f0cfa7",
        300: "#e4b47a",
        400: "#d89a52",
        500: "#c47f32",
        600: "#a46528",
        700: "#824d21",
        800: "#62381b",
        900: "#422414",
      },
      secondary: colors.stone,
    },
  },
  plugins: [],
};
