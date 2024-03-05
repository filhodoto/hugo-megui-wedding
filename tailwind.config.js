/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        action: colors.red,
        primary: colors.gray,
      },
      fontFamily: {
        heading: ['"Noto Serif"', 'cursive'],
        body: ['"Noto Sans"', 'sans serif'],
      },
    },
  },
  plugins: [],
};
