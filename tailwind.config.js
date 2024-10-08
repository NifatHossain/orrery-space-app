/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('/full-moon.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

