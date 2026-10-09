/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B3B2B',
          deep: '#12261C',
          muted: '#2A5340',
        },
        ink: '#0B120E',
        linen: '#F4F0E6',
        cream: '#FBF9F4',
        blush: {
          DEFAULT: '#E6C4BB',
          deep: '#8A4540',
        },
        mist: {
          DEFAULT: '#C9C3B3',
          deep: '#5C584C',
        },
        copper: '#8A4540',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(11, 18, 14, 0.38)',
        soft: '0 12px 30px -18px rgba(11, 18, 14, 0.22)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
