/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        cormorant: ['Cormorant Garamond', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        wedding: {
          dark: '#15110e',
          sand: '#bd8869',
          green: '#445e45',
          beige: '#b7926e',
          brown: '#8b6041',
          pink: '#d0879e',
          cream: '#efebe9',
          tan: '#d2bea5',
          charcoal: '#181515',
          white: '#fdfdfd',
        },
      },
    },
  },
  plugins: [],
};