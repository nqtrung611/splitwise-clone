/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'splitwise-green': '#5CB85C',
        'splitwise-orange': '#F97316',
        'splitwise-red': '#EF4444',
      }
    },
  },
  plugins: [],
}