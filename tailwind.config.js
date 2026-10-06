/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05080D',
        abyss: '#0A0F1C',
        forest: '#16223B',
        accent: '#4F7FBF',
        cream: '#EDEFF5',
        stone: '#B8C2D9',
        'stone-dim': '#7C8699',
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        subheading: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
