/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#8B00FF',
          red: '#FF0000',
          cyan: '#00FFFF',
        },
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow: '0 0 10px #8B00FF, 0 0 20px #8B00FF, 0 0 30px #8B00FF',
            boxShadow: '0 0 10px #8B00FF, 0 0 20px #8B00FF, 0 0 30px #8B00FF',
          },
          '50%': {
            textShadow: '0 0 20px #8B00FF, 0 0 30px #8B00FF, 0 0 40px #8B00FF',
            boxShadow: '0 0 20px #8B00FF, 0 0 30px #8B00FF, 0 0 40px #8B00FF',
          },
        },
        slideDown: {
          from: {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        slideDown: 'slideDown 0.6s ease-out',
        fadeInUp: 'fadeInUp 0.6s ease-out 0.2s both',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
