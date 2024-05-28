/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        gray: '#1c1a1a',
        'gray-text': '#E9E9E8',
      },
    },
  },
  plugins: [],
};
