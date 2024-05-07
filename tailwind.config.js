/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FBFBFB',
      'primary': '#2E3440',
      'secondary': '#3B4252',
      'tertiary': '#E5E9F0',
    },
    extend: {},
  },
  plugins: [],
}