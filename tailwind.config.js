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
        'ai-blue': '#0066FF',
        'financial-green': '#00CC99',
        'ownership-purple': '#6633CC',
        
        // Status Colors
        'success': '#00E676',
        'warning': '#FFAB00',
        'error': '#FF5252',
        'info': '#2196F3',
        
        // Chart & Data Visualization Colors
        'data-blue-1': '#29B6F6',
        'data-green-1': '#26A69A',
        'data-purple-1': '#9575CD',
        'data-blue-2': '#5C6BC0',
        'data-green-2': '#66BB6A',
        'data-purple-2': '#BA68C8',
        
        // Neutral Colors
        'dark': '#212121',
        'medium-dark': '#616161',
        'medium': '#9E9E9E',
        'light-medium': '#E0E0E0',
        'light': '#F5F5F5',
        
        // Background Colors
        'deep-space': '#121212',
        'night-mode': '#1E1E1E',
        'light-cloud': '#FAFAFA',
        'paper-white': '#FFFFFF',
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
  plugins: [],
}
