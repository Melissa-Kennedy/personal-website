// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }
      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }
      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }
      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }
      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
      'header': ['Poppins', 'sans-serif'],
      'text': ['Raleway', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'main-bg': "url('../blue.png')",
      }),
      colors: {
        'site-main': {
          DEFAULT: '#121b41'
        },
        'site-sec': {
          DEFAULT: '#aeb4c8'
        },
        'site-third': {
          DEFAULT: '#f4f4f4'
        },
        'site-accent': {
          DEFAULT: '#9a9dd5'
        }
      },
      transitionProperty: {

        'height': 'height',

        'width': 'width',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}