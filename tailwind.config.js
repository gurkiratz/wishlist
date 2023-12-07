/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        timberwolf: {
          DEFAULT: "#d7cdcc",
          100: "#2f2625",
          200: "#5e4b4a",
          300: "#8d716e",
          400: "#b29f9d",
          500: "#d7cdcc",
          600: "#dfd7d6",
          700: "#e7e1e0",
          800: "#efebea",
          900: "#f7f5f5",
        },
        raisin_black: {
          DEFAULT: "#1d1e2c",
          100: "#060609",
          200: "#0b0c11",
          300: "#11121a",
          400: "#171723",
          500: "#1d1e2c",
          600: "#3f4160",
          700: "#626595",
          800: "#9597ba",
          900: "#cacbdc",
        },
      },
    },
  },
  plugins: [],
}
