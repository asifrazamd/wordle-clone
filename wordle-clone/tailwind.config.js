// tailwind.config.js
module.exports = {
  darkMode: 'class', // Keep dark mode strategy as 'class'
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.5s ease-in-out',  // Define a shake animation lasting 0.5s
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-4px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
