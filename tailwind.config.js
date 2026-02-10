/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-emerald-50', 'text-emerald-700', 'border-emerald-200',
    'bg-amber-50', 'text-amber-700', 'border-amber-200',
    'bg-blue-50', 'text-blue-700', 'border-blue-200',
    'bg-rose-50', 'text-rose-700', 'border-rose-200',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors - Light Calibrate theme
        background: '#F9FAFB',
        surface: '#FFFFFF',
        'surface-alt': '#F3F4F6',

        // Text colors
        text: {
          primary: '#0F172A',
          secondary: '#64748B',
          tertiary: '#94A3B8',
        },

        // Brand colors
        brand: {
          primary: '#000000',
          hover: '#1F2937',
          secondary: '#3B82F6',
          light: '#F3F4F6',
        },

        // Utility colors
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',

        // Borders
        border: '#E5E7EB',
        'border-light': '#F3F4F6',

        // Chart pastels
        'chart-blue': '#BAE6FD',
        'chart-pink': '#FBCFE8',
        'chart-mint': '#A7F3D0',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier', 'monospace'],
      },
      fontSize: {
        'hero': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-xl': ['1.25rem', { lineHeight: '1.75' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
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
      borderRadius: {
        'card': '12px',
      },
    },
  },
  plugins: [],
}
