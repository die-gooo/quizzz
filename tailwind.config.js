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
            "surface-light": "#ffffff",
            "surface-variant": "rgba(255, 255, 255, 0.08)",
          },
          fontFamily: {
            "display": ["Spline Sans", "sans-serif"]
          },
          borderRadius: {
            "DEFAULT": "12px", 
            "sm": "8px",
            "md": "12px",
            "lg": "16px", 
            "xl": "20px", 
            "2xl": "24px",
            "3xl": "28px",
            "full": "9999px"
          },
          boxShadow: {
              // Google Stitch-style elevation shadows
              'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              'neon': '0 0 20px rgba(43, 238, 121, 0.25), 0 0 40px rgba(43, 238, 121, 0.1)',
              'card': '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04)',
              'elevated': '0 8px 16px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
          },
          animation: {
            'fade-in': 'fadeIn 0.3s ease-in-out',
            'slide-up': 'slideUp 0.3s ease-out',
            'scale-in': 'scaleIn 0.2s ease-out',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            slideUp: {
              '0%': { transform: 'translateY(10px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
            },
            scaleIn: {
              '0%': { transform: 'scale(0.95)', opacity: '0' },
              '100%': { transform: 'scale(1)', opacity: '1' },
            },
          },
      },
  },
  plugins: [],
}