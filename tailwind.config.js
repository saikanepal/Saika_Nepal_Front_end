

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#3F72AF",
        
      },
      fontFamily: {
        Saira: ['Saira', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
