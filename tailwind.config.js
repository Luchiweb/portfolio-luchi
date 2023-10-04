/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': 'var(--main-color)',
        'secondary-color': 'var(--secondary-color)',
        'tertiary-color': 'var(--tertiary-color)',
        'bg-color': 'var(--bg-color)',
      },
      fontFamily: {
        '--main-font-family': '"Montserrat", sans-serif',
        '--secondary-font-family': '"Josefin Sans", sans-serif',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

