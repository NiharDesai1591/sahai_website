/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Agent card colors
    'bg-brand-light', 'text-brand-primary', 'border-brand-primary',
    'bg-amber-100', 'text-amber-600', 'border-amber-600', 'bg-amber-50', 'border-amber-500',
    'bg-blue-100', 'text-blue-600', 'border-blue-600', 'bg-blue-50', 'border-blue-500',
    'bg-rose-100', 'text-rose-600', 'border-rose-600', 'bg-rose-50', 'border-rose-500',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors - Light theme
        background: '#F8F9FA',
        surface: '#FFFFFF',

        // Text colors
        text: {
          primary: '#1A1A1A',
          secondary: '#6B7280',
          tertiary: '#9CA3AF',
        },

        // Brand colors
        brand: {
          primary: '#14B8A6',
          hover: '#0D9488',
          light: '#99F6E4',
        },

        // Semantic colors
        border: '#E5E7EB',
        divider: '#F3F4F6',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier', 'monospace'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
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
      },
    },
  },
  plugins: [],
}
