/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b66c2",
        muted: "#666666",
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        md: "850px",
      },
    },
    important: true,
  },
  plugins: [],
};
