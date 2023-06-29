/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans KR', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        purple: '#9664FF',
        beige: '#F6F4F1',
        gray: '#999999',
        'beige-dark': '#F6F4F1',
        tag: '#F1EEEA',
        red: '#FF4040',
      },
      backgroundImage: {
        upward: 'url("/assets/upArrow.svg")',
        downward: 'url("/assets/downArrow.svg")',
      },
      fontSize: {},
      boxShadow: {
        basic: '0px 4px 8px rgba(41, 41, 41, 0.08)',
        light: '0px 4px 4px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          // IE and Edge
          '-ms-overflow-style': 'none',

          // Firefox
          'scrollbar-width': 'none',

          // Safari and Chrome
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};
