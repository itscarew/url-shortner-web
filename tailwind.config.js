/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Geometria", "sans-serif"],
      },
      colors: {
        "sea-green": {
          50: "#f0f9f2",
          100: "#dbf0de",
          200: "#b9e1c3",
          300: "#8acb9d",
          400: "#59ae75",
          500: "#389158",
          600: "#287746",
          700: "#1f5d38",
          800: "#1b4a2e",
          900: "#173d27",
        },
      },
    },
  },
  plugins: [],
};
