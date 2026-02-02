/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0F0F0F',
        slate: '#1A1A1B',
        silver: '#F5F5F5',
        glow: {
          sakhi: '#06D6A0',
          guru: '#FFB703',
          clerk: '#4361EE',
          analyst: '#EF476F',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier', 'monospace'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'section': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'subsection': ['1.5rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'technical': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
