/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal:         { DEFAULT: '#1a6b5e', light: '#2a8f7f', dark: '#0f4a40' },
        amber:        { DEFAULT: '#e8973a', light: '#f5b563' },
        cream:        { DEFAULT: '#f9f5ef', dark: '#ede8df' },
        charcoal:     '#2a2a2a',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}