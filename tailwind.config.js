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
        bistre: '#251605',
        ash: '#A8B7AB',
        coral: '#E8553A',
        sand: '#F5F0EB',
        gray: {
          mid: '#6B7280',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
