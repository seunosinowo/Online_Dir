/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'all-sides': '0 0 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}