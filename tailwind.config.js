/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'bg-blue': '#00ADEE',
        'tittle-green': '#8BC53F',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],

      },

      spacing: {
        '128': '28rem',
        '100': '80rem',
        '101': '40.25rem'
      },

      fontSize: {
        'x29': "1.32rem",
        'xl3': '1.4rem',
      }

    },
  },
  plugins: [],
}