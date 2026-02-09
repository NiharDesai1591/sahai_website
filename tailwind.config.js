/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Agent card colors
    'bg-brand-light', 'text-brand-primary', 'border-brand-primary',
    'bg-amber-900/30', 'text-amber-400', 'border-amber-400', 'bg-amber-900/20', 'border-amber-500',
    'bg-blue-900/30', 'text-blue-400', 'border-blue-400', 'bg-blue-900/20', 'border-blue-500',
    'bg-rose-900/30', 'text-rose-400', 'border-rose-400', 'bg-rose-900/20', 'border-rose-500',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors - Dark theme
        background: '#0A0A1A',
        surface: '#111827',
        'surface-light': '#1F2937',

        // Text colors
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
          tertiary: '#64748B',
        },

        // Brand colors
        brand: {
          primary: '#14B8A6',
          hover: '#2DD4BF',
          light: '#14B8A6',
          glow: 'rgba(20, 184, 166, 0.15)',
        },

        // Semantic colors
        border: '#1E293B',
        divider: '#1E293B',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier', 'monospace'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h1': ['2.5rem', { lineHeight: '1.2' }],
        'h2': ['2rem', { lineHeight: '1.25' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'body-xl': ['1.25rem', { lineHeight: '1.7' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      maxWidth: {
        'content': '1280px',
        'text': '720px',
      },
      spacing: {
        'section': '8rem',
        'section-mobile': '4rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(20, 184, 166, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
