/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main2: '#dac5a7', // Define the color with a name, e.g., 'main'
        main1: '#000',
      },
      fontFamily: {
        poppins: ['Poppins'],
        outfit:['Outfit'] // Add Poppins as a custom font
      },
    },
  },
  plugins: [],
}

