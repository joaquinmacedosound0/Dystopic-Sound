/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#090909',
        abyss: '#101714',
        forest: '#1B352A',
        accent: '#4F8A6B',
        cream: '#EDEAE3',
        stone: '#B7C0BA',
        'stone-dim': '#7C8985',
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
