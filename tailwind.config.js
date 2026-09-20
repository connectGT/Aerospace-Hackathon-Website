/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020308',
          900: '#060814',
          850: '#0a0e20',
          800: '#0f172a',
          700: '#1e293b',
          600: '#334155'
        },
        crimson: {
          400: '#ff4d6d',
          500: '#e02444',
          600: '#c71b38',
          700: '#9b1129',
          glow: 'rgba(224, 36, 68, 0.45)'
        },
        cyan: {
          glow: 'rgba(6, 182, 212, 0.4)'
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        sanskrit: ['Rozha One', 'Yatra One', 'serif'],
        inter: ['Inter', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'laser-sweep': 'laser 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(16px) rotate(-2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        laser: {
          '0%, 100%': { opacity: '0.2', transform: 'scaleX(0.95)' },
          '50%': { opacity: '0.9', transform: 'scaleX(1.05)' },
        }
      },
      backgroundImage: {
        'radial-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
