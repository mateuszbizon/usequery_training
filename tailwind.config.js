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
        "light-1": "#fff",
        "light-2": "#ecf2f9",
        "dark-1": "#000",
        "dark-2": "#0a2540",
      }
    },
  },
  plugins: [],
}

