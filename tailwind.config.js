/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
            "primary": "#2bee79",
            "background-light": "#f6f8f7",
            "background-dark": "#102217",
            "card-dark": "#152a1d",
            "card-surface": "rgba(255, 255, 255, 0.05)",
          },
          fontFamily: {
            "display": ["Spline Sans", "sans-serif"]
          },
          borderRadius: {"DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "3rem", "full": "9999px"},
          boxShadow: {
              'neon': '0 0 10px rgba(43, 238, 121, 0.3)',
              'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
          }
      },
  },
  plugins: [],
}