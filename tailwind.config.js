/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        cream: "#f6f4ef",
        lightCream: "#f9f7f1",
        darkGray: "#1a1a1a",
        gray700: "#4a4a4a", // Added specific gray shades as needed
      },
    },
  },
  plugins: [],
};
