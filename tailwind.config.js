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
        fern: {
          50: "#effaf1",
          100: "#d8f3db",
          200: "#b4e6bc",
          300: "#83d295",
          400: "#51b86b",
          500: "#2d9c4d",
          600: "#1e7d3b",
          700: "#186431",
          800: "#155028",
          900: "#124223",
        },
      },
    },
  },
  plugins: [],
};
