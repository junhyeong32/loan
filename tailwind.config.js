/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  content: [],
  theme: {
    fontWeight: {
      bold: "SEBANG_Gothic_Bold",
    },
    colors: {
      primary: "#4158D9",
      secondary: "#3478F6",
      third: "#F0ECEC",
      black: "#000",
      white: "#FFF",
      red: "#F25700",
      gray: "#ddd",
    },
    screens: {
      xs: "200px",
      sm: "800px",
      md: "840px",
      lg: "1280px",
      xl: "1920px",
    },
    extend: {
      spacing: {
        large: "1200px",
      },
      width: {
        mobile: "300px",
      },
    },
  },
  plugins: [],
};
