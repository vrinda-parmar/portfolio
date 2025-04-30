/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors - Cyber blue
        primary: {
          50: '#E6F8FF',
          100: '#B3E7FF',
          200: '#80D5FF',
          300: '#4DC4FF',
          400: '#1AB2FF',
          500: '#0090E6',
          600: '#006DB3',
          700: '#004A80',
          800: '#00274D',
          900: '#00131A',
        },
        // Secondary colors - Electric purple
        secondary: {
          50: '#F2E6FF',
          100: '#D9B3FF',
          200: '#C080FF',
          300: '#A74DFF',
          400: '#8E1AFF',
          500: '#7000E6',
          600: '#5500B3',
          700: '#3A0080',
          800: '#1F004D',
          900: '#0D001A',
        },
        // Accent colors - Neon green
        accent: {
          50: '#E6FFF2',
          100: '#B3FFD9',
          200: '#80FFC0',
          300: '#4DFFA7',
          400: '#1AFF8E',
          500: '#00E670',
          600: '#00B355',
          700: '#00803B',
          800: '#004D23',
          900: '#001A0D',
        },
        // Tech colors
        tech: {
          cyan: '#00F5FF',
          magenta: '#FF00F5',
          yellow: '#F5FF00',
          red: '#FF2D55',
        },
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'fade-in': 'fadeIn 1s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-10px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #00F5FF, 0 0 15px #00F5FF' },
          '100%': { textShadow: '0 0 10px #00F5FF, 0 0 30px #00F5FF' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.tech.cyan), 0 0 20px theme(colors.tech.cyan)',
        'neon-strong': '0 0 10px theme(colors.tech.cyan), 0 0 30px theme(colors.tech.cyan)',
      },
    },
  },
  plugins: [],
};