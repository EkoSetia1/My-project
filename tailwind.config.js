/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      REM: ["REM", "sans-serif"],
      Caveat: ["Caveat", "cursive", "serif"],
    },
  },
  plugins: [require("daisyui")],
};
