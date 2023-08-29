/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        'list-border': '0.5px',
      },
      colors: {
        "background-blue": "#f0f4f8",
        "detail-black": "#6b5e71",
        "chart-background": "#fffefe",

        "list-background" : "#1B1A20",
        "list-selected" : "#383642",

        "obzen-purple": "#672c68",
        "obzen-red" : "#E04C4C",
        
      },
    },
  },
  plugins: [],
};