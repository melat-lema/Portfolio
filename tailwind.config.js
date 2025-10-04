module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-dark-bg',
    'text-text-white',
    'border-blue',
    'border-green',
    'text-accent-blue',
    'text-accent-green',
    'text-accent-purple',
    'text-accent-gold',
    'bg-code-bg',
    'from-white',
    'to-[#00C4FF]',
    'bg-gradient-to-r',
    'hover:bg-gradient-to-r',
    'hover:from-[#00C4FF]',
    'hover:to-white',
    'animate-pulse',
    'animate-bounce',
    'animate-twinkle',
    'glow-blue',
    'glow-purple',
    'glow-gold',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        'dark-bg': '#0A0A12',
        'code-bg': '#0E1018',
        'accent-blue': '#00C4FF',
        'accent-green': '#00FF9D',
        'accent-purple': '#B36CFE',
        'accent-gold': '#FFC700',
        'text-white': '#FFFFFF',
        'text-gray': '#ABB2BF',
        'border-blue': '#00C4FF',
        'border-green': '#00FF9D',
        'glow-blue': 'rgba(0, 196, 255, 0.3)',
        'glow-purple': 'rgba(179, 108, 254, 0.2)',
        'glow-gold': 'rgba(255, 199, 0, 0.2)',
      },
      backgroundImage: {
        'grid': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3e%3cpath d='M0 50H100' fill='none' stroke='%231a1a2e' stroke-width='0.5'/%3e%3cpath d='M50 0V100' fill='none' stroke='%231a1a2e' stroke-width='0.5'/%3e%3c/svg%3e\")",
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        shoot: 'shoot 4s linear infinite',
        fadeInOut: 'fadeInOut 3s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shoot: {
          '0%': { transform: 'translateX(-100px) translateY(-100px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)', opacity: '0' },
        },
        fadeInOut: {
          '0%': { opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        
      },
    },
  },
  plugins: [],
}