/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'ai-blue': 'rgb(var(--ai-blue) / <alpha-value>)',
        'financial-green': 'rgb(var(--financial-green) / <alpha-value>)',
        'ownership-purple': 'rgb(var(--ownership-purple) / <alpha-value>)',
        
        // Status Colors
        'success': 'rgb(var(--success) / <alpha-value>)',
        'warning': 'rgb(var(--warning) / <alpha-value>)',
        'error': 'rgb(var(--error) / <alpha-value>)',
        'info': 'rgb(var(--info) / <alpha-value>)',
        
        // Chart & Data Visualization Colors
        'data-blue-1': 'rgb(var(--data-blue-1) / <alpha-value>)',
        'data-green-1': 'rgb(var(--data-green-1) / <alpha-value>)',
        'data-purple-1': 'rgb(var(--data-purple-1) / <alpha-value>)',
        'data-blue-2': 'rgb(var(--data-blue-2) / <alpha-value>)',
        'data-green-2': 'rgb(var(--data-green-2) / <alpha-value>)',
        'data-purple-2': 'rgb(var(--data-purple-2) / <alpha-value>)',
        
        // Neutral Colors
        'dark': 'rgb(var(--dark) / <alpha-value>)',
        'medium-dark': 'rgb(var(--medium-dark) / <alpha-value>)',
        'medium': 'rgb(var(--medium) / <alpha-value>)',
        'light-medium': 'rgb(var(--light-medium) / <alpha-value>)',
        'light': 'rgb(var(--light) / <alpha-value>)',
        
        // Background Colors
        'deep-space': 'rgb(var(--deep-space) / <alpha-value>)',
        'night-mode': 'rgb(var(--night-mode) / <alpha-value>)',
        'light-cloud': 'rgb(var(--light-cloud) / <alpha-value>)',
        'paper-white': 'rgb(var(--paper-white) / <alpha-value>)',
      },
      spacing: {
        // Make sure spacing utilities are explicitly included
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '80': '20rem',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['40px', '48px'],
        'h2': ['32px', '40px'],
        'h3': ['24px', '32px'],
        'h4': ['20px', '28px'],
        'body-1': ['16px', '24px'],
        'body-2': ['14px', '20px'],
        'caption': ['12px', '16px'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      boxShadow: {
        'card': '0px 4px 12px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'card': '8px',
        'button': '8px',
        'input': '4px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-in': 'scaleIn 0.2s cubic-bezier(0.0, 0.0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
