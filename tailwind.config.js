/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/Property-Listing-16.jpg')",
        'hero-pattern2':"url('/blur-house.jpg')",
        'hero-pattern3':"url('/orange-gradient.jpg')"
      },
      boxShadow:{
        'bx-shadow':"0 10px 15px -3px rgba(255, 165, 0, 0.4), 0 4px 6px -2px rgba(255, 165, 0, 0.1);"
      },
    },
  },
  plugins: [],
}