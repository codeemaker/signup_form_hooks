/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      white:"#ffffff",
      primary:"#7919ed",
      error:"#e41313"
    },
    fontFamily:{
      'roboto':['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
