/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bae2bd',
          300: '#8fcf94',
          400: '#5db665',
          500: '#3c9d45',
          600: '#2a7f33',
          700: '#24652c',
          800: '#215127',
          900: '#1d4423',
        },
        gold: {
          100: '#fff8e6',
          200: '#ffedb3',
          300: '#ffe180',
          400: '#ffd54d',
          500: '#ffc91a',
          600: '#e6b300',
          700: '#b38a00',
          800: '#806200',
          900: '#4d3a00',
        }
      },
    },
  },
  plugins: [],
};