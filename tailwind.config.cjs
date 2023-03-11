/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        '10xl': '10px',
      },
      borderRadius: {
        '20xl': '20px',
      },
      width: {
        mc: 'max-content',
      },
      margin: {
        '5xl': '5px',
        '10xl': '10px',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
