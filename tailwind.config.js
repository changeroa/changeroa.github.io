import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm cream base palette
        cream: {
          50: '#FFFEF9',
          100: '#FEFCF3',
          200: '#FDECD4',  // Main cream color
          300: '#FBDDB5',
          400: '#F8CC96',
          500: '#F4BA77',
          600: '#E89F4F',
          700: '#D08635',
          800: '#A86A2A',
          900: '#7A4D1F',
          DEFAULT: '#FDECD4',
        },
        // Soft terracotta accent
        terra: {
          50: '#FFF5F2',
          100: '#FFE8E0',
          200: '#FFD4C4',
          300: '#FFBFA8',
          400: '#FF9F7A',
          500: '#E67E5B',
          600: '#C26347',
          700: '#9E4F38',
          800: '#7A3C2B',
          900: '#5C2D20',
          DEFAULT: '#E67E5B',
        },
        // Warm sage green complement
        sage: {
          50: '#F5F7F3',
          100: '#E8EDE4',
          200: '#D4DEC9',
          300: '#B8C9A8',
          400: '#9CB287',
          500: '#7F9966',
          600: '#647A4F',
          700: '#4D5E3C',
          800: '#3A472D',
          900: '#283120',
          DEFAULT: '#7F9966',
        },
        // Soft lavender accent
        lavender: {
          50: '#FAF8FC',
          100: '#F3EFF8',
          200: '#E7DFF1',
          300: '#D4C5E5',
          400: '#BBA7D3',
          500: '#9F89BD',
          600: '#826BA0',
          700: '#685582',
          800: '#4F4163',
          900: '#3A2F49',
          DEFAULT: '#9F89BD',
        },
        // Warm brown for text
        cocoa: {
          50: '#FAF8F6',
          100: '#F0EBE7',
          200: '#E0D4CC',
          300: '#C4B2A5',
          400: '#A08B7B',
          500: '#7C6555',
          600: '#604F42',
          700: '#4A3D33',
          800: '#362C25',
          900: '#241D18',
          DEFAULT: '#4A3D33',
        },
        // Keep dark mode colors
        dark: {
          DEFAULT: '#241D18',
          lighter: '#362C25',
        },
        // Legacy color compatibility
        primary: {
          50: '#FFF5F2',
          100: '#FFE8E0',
          200: '#FFD4C4',
          300: '#FFBFA8',
          400: '#FF9F7A',
          500: '#E67E5B',
          600: '#C26347',
          700: '#9E4F38',
          800: '#7A3C2B',
          900: '#5C2D20',
          DEFAULT: '#E67E5B',
          dark: '#C26347',
        },
        accent: {
          50: '#FAF8FC',
          100: '#F3EFF8',
          200: '#E7DFF1',
          300: '#D4C5E5',
          400: '#BBA7D3',
          500: '#9F89BD',
          600: '#826BA0',
          700: '#685582',
          800: '#4F4163',
          900: '#3A2F49',
          DEFAULT: '#9F89BD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-in-out',
        'gradient': 'gradient 6s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
    },
  },
  plugins: [
    typography,
  ],
  darkMode: 'class',
}
