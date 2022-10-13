/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      black: "#000",
      white: "#FFF",
      gray: {
        900: "#121214",
        800: "#282824",
        400: "#7c7c8a",
        200: "#c4c4cc",
        100: "#e1e1e6",
      },
      cyan: {
        500: "#81d8f7",
        300: "#98E1F8",
      },
      /*       "gray-900": "#121214",
      "gray-800": "#282824",
      "gray-400": "#7c7c8a",
      "gray-200": "#c4c4cc",
      "gray-100": "#e1e1e6",
      "cyan-500": "#81d8f7",
      "cyan-300": "#98E1F8", */
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
