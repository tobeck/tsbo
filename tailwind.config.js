module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ash: '#A8B7AB',
        bistre: '#251605'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['@tailwindcss/typography'],
}
