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
        midnight: '#0D1117',
        terminal: '#1A1F2B',
        phosphor: '#00FF88',
        amber: '#FFAA00',
        cyan: '#00D4FF',
        ghost: '#8B949E',
        smoke: '#C9D1D9',
        white: '#F0F6FC',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-green': '0 0 15px rgba(0, 255, 136, 0.3)',
        'glow-amber': '0 0 15px rgba(255, 170, 0, 0.3)',
        'glow-green-lg': '0 0 30px rgba(0, 255, 136, 0.2)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
