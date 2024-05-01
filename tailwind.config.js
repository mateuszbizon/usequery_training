/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#635bff",
        "secondary-1": "#00d4ff",
      }
    },
  },
  plugins: [],
}

