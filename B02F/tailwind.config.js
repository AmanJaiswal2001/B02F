/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(257.29deg, rgba(153, 124, 152, 0.6) 6.5%, #FFFFFF 18.5%, rgba(159, 13, 118, 0.27) 41%, #FFFFFF 77.5%, rgba(153, 124, 152, 0.4) 90.5%)',
      },
    },
  },
  plugins: [],
}