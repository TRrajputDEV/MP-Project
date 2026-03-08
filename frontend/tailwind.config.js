/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron:  { DEFAULT: '#FF6600', light: '#FF8533', dark: '#CC5200' },
        crimson:  { DEFAULT: '#8B0000', light: '#A50000', dark: '#5C0000' },
        gold:     { DEFAULT: '#D4A017', light: '#E8B830' },
        ivory:    { DEFAULT: '#FDF8F0', dark: '#F5EDD8' },
        charcoal: '#1A1A1A',
        muted:    '#5C5C5C',
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        body:    ['Mukta', 'Noto Sans Devanagari', 'sans-serif'],
        hindi:   ['Noto Sans Devanagari', 'Mukta', 'sans-serif'],
      },
      backgroundImage: {
        'pratap-gradient': 'linear-gradient(135deg, #8B0000 0%, #CC5200 50%, #FF6600 100%)',
      },
    },
  },
  plugins: [],
}