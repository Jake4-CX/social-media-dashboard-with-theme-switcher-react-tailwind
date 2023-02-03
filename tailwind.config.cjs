/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    "border-t-[#1790f1]",
    "border-t-[#1da1f2]",
    "border-t-[#c13584]",
    "border-t-[#ff0000]"

  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
