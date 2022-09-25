/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#181818",
        "purple": "#8758FF",
        "blue": "#8758FF",
        "gray-new": "#F2F2F2"
      }
    },
  },
  plugins: [],
}
