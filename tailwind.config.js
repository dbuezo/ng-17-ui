/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fff1f2',
          '100': '#ffdfe2',
          '200': '#ffc5cb',
          '300': '#ff9ca6',
          '400': '#ff6473',
          '500': '#ff3347',
          '600': '#ee1429',
          '700': '#ce0d20',
          '800': '#a50f1e',
          '900': '#89131f',
          '950': '#4b040b',
      },
      
      },
    },
  },
  plugins: [],
};
