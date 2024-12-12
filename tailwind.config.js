/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // Ajusta las rutas según la estructura de tu proyecto
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_primary: "#2e3440",
        text_primary: "#e5e9f0",
        bg_secondary: "#3b4252",
        bg_tertiary: "#434c5e",
        bg_button: "#5e81ac",
        color: "#5e81ac", // text-color
      },
      keyframes: {
        "infinite-slide": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        "infinite-slide": "infinite-slide 10s linear infinite",
      },
    },
    fontFamily: {
      firacode: ['"Fira Code"', "monospace"],
    },
  },
  plugins: [],
};
