/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-blue": "#f0f4f8",
        "detail-black": "#6b5e71",
        "chart-background": "#fffefe",

        "obzen-purple": "#672c68",
        "obzen-red" : "#E04C4C",
        
      },
    },
  },
  plugins: [],
};