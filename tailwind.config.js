/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '1.5': '1.5px',
      },
      colors: {
        "background-blue": "#f0f4f8",
        "detail-black": "#6b5e71",
        "chart-background": "#fffefe",
        "list-background" : "#181C1F",
        "list-selected" : "#2D3438",

        "obzen-purple": "#672c68",
        "obzen-red" : "#E04C4C",
        
      },
    },
  },
  plugins: [],
};