/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#ff0000"
      },
      fontFamily :{ 
        montreal: ["montreal","sans-serif"], 
        light: ["light","sans-serif"], 

      } 
    },
  },
  plugins: [],
}

