import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        feminine: {
          pink: '#F8B4C4',
          'pink-light': '#FDE8ED',
          'pink-dark': '#E8959F',
          rose: '#D4A5A5',
          blush: '#FFE4E6',
          cream: '#FDF8F6',
          beige: '#F5EBE0',
          gold: '#C9A227',
          'gold-light': '#E8D5A3',
          charcoal: '#3D3D3D',
          'gray-soft': '#8B8B8B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(248, 180, 196, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(248, 180, 196, 0.8)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
