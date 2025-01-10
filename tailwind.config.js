/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'radial-gradient': 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 20%, rgba(250, 49, 243, 0.3) 80%, rgba(88, 4, 145, 0.3) 100%)',
      // },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 100%, rgba(255, 255, 255, 0.3) 20%, rgba(250, 49, 243, 0.3) 80%, rgba(88, 4, 145, 0.3) 100%)',
      },
      colors: {
        pink: '#FA31F3',
        purple: "#580491"
      }
    },
  },
  plugins: [],
}

