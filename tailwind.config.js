/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans KR'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        purple: '#9664FF',
        beige: '#F6F4F1',
        gray: '#999999',
        'beige-dark': '#F6F4F1',
      },
      fontSize: {},
    },
  },
  plugins: [],
};
