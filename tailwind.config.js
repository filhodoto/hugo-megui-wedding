/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
/* #78614c
#9c8476
#bcaca3 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        action: colors.red,
        primary: colors.gray,
        headings: '#78614c',
      },
      fontFamily: {
        heading: ['"Noto Serif"', 'cursive'],
        body: ['"Noto Sans"', 'sans serif'],
      },
    },
  },
  plugins: [],
};
