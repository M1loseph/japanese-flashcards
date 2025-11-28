/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // Indigo
        secondary: '#fbcfe8', // Sakura Pink
        background: '#f8fafc', // Slate 50
        surface: '#ffffff',
        text: '#0f172a', // Slate 900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        jp: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
