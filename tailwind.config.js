/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B3B2B',
          deep: '#12261C',
          muted: '#2F5343',
          sage: '#6B8F7A',
        },
        ink: '#12261C',
        linen: '#F7F5F0',
        cream: '#FDFCFA',
        blush: {
          DEFAULT: '#E8D4CE',
          soft: '#F3E8E4',
          deep: '#C4A39C',
        },
        mist: {
          DEFAULT: '#D9D2C8',
          deep: '#6B665C',
        },
        copper: '#C4A39C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(27, 59, 43, 0.28)',
        soft: '0 12px 30px -18px rgba(27, 59, 43, 0.16)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
