/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: '#EAEDED',
          light_blue: '#232f3A',
          yellow: '#FEBD69',
          DEFAULT: '#131921',
        },
      },
    },
  },
  plugins: [],
};
