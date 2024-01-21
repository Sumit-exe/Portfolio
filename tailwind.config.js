/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main': '#a444bb',
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

