/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#212529",
        blue: "#4285F4",
        green: "#00A85D",
        yellow: "#F4B400",
      },
      spacing: {},
    },
  },
  plugins: [],
};
