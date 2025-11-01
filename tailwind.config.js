/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00d4ff',
        'neon-purple': '#b300ff',
        'neon-pink': '#ff006e',
        'dark-bg': '#0a0a0f',
        'dark-card': '#141420',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-strong': '0 0 40px rgba(0, 212, 255, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)' },
          'to': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
