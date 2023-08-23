/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  darkMode: 'class',
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
        darkModeBG: 'hsl(220.91,39.29%,10.98%)',
        darkModeBG2: 'hsl(215,27.91%,16.86%)',
        darkModeBG3: 'hsl(216.92,19.12%,26.67%)',
        darkModeTagBG: '#261379',
        darkModeTagText: '#9664FE',
        darkModeText: '#9BA3AF',
        darkModeTitle: '#ededed',
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
    screens: {
      mobile_xs: { min: '320px', max: '359px' },
      // => @media (min-width: 320px and max-width: 359px)

      mobile_sm: { min: '360px', max: '767px' },
      // => @media (min-width: 320px and max-width: 767px)

      tablet: { min: '768px', max: '1023px' },
      // => @media (min-width: 640px and max-width: 1023px)

      notebook: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px)

      desktop: { min: '1280px' },
      // => @media (min-width: 1280px)
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
