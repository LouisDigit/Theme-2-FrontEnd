/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#333",
      gray: "#333",
      white: "#fff",
      lightGray: "#e5e7eb",
      componentBg: "#34495e",
      formBg: "#2c3e50",
      red: "#ee5253",
      green: "#2ecc71",
      blue: "#3498db",
      yellow: "#f1c40f",
    },
    extend: {
      boxShadow: {
        myShadow: "0px 54px 55px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
