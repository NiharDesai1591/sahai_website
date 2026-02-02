/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        cream: '#FAFAFA',
        paper: '#FFFFFF',
        charcoal: '#1a202c',
        slate: '#4a5568',
        muted: '#718096',
        border: '#e2e8f0',
        // Accent colors (keeping the agent colors)
        accent: {
          primary: '#14b8a6',    // Teal - primary accent
          sakhi: '#06D6A0',      // Teal - The Voice
          guru: '#FFB703',       // Amber - The Mentor
          clerk: '#4361EE',      // Indigo - The Engine
          analyst: '#EF476F',    // Crimson - The Brain
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
        'grid-pattern': 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
