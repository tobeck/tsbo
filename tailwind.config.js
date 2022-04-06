module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ash: '#A8B7AB',
        bistre: '#251605',
      },
    },
  },
  plugins: ['@tailwindcss/typography'],
}
