/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '569px',
      },
      colors: {
        'primary': '#282634'
      }
    },
  },
  plugins: [],
}
