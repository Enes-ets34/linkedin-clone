/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
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
