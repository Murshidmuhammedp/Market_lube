/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 1s ease-in-out infinite',
        pulse: 'pulse 1s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' }, // Start and end at the center
          // Slight left and right movements
          '25%': { transform: 'translateX(-10px) translateY(-5px)' }, // Move left and slightly up
          '50%': { transform: 'translateX(10px) translateY(5px)' },   // Move right and slightly down
          '75%': { transform: 'translateX(-5px) translateY(-3px)' },
        },
      },
    },
  },
  plugins: [],
}