/** @type {import('tailwindcss').Config} */
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
      fontSize: {},
      boxShadow: {
        basic: '0px 4px 8px rgba(41, 41, 41, 0.08)',
      },
    },
  },
  plugins: [],
};
