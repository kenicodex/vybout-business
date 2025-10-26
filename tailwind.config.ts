import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 🩵 Primary Brand Blue
        primary: {
          DEFAULT: '#2563EB', // Blue-600
          light: '#3B82F6',   // Blue-500
          dark: '#1E40AF',    // Blue-800
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#6B7280', // Neutral Gray
          light: '#9CA3AF',
          dark: '#4B5563',
          foreground: '#FFFFFF',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#047857',
        },
        danger: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#991B1B',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#92400E',
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#0F172A',
        },
        border: '#E5E7EB',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.05)',
        medium: '0 4px 12px rgba(0, 0, 0, 0.1)',
        strong: '0 8px 24px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-animate'),
  ],
}

export default config
