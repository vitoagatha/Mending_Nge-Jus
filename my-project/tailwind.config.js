/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#de2c4d",
        secondary: "#fb923c"
      },
      
      fontFamily: {
        poppins: ["Poppins", "Sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },

      container:{
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2x1": "Grem",
        }
      },
    },
  },
  plugins: [],
}

