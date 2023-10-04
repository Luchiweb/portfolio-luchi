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
        'bg-color': 'var(--bg-color)',
      },
      keyframes: {
        marque: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },

      },
      animation: {
        marque: 'marque 5s linear infinite',
      },
      boxShadow: {
        '0': '-8px 8px var(--main-color) ',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

