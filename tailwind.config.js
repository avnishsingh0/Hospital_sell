/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B6E6E',
          light: '#0D8A8A',
          dark: '#084F4F',
          50: '#F0FAFA',
          100: '#CCEFEF',
          200: '#99DFDF',
          300: '#66CFCF',
          400: '#33BFBF',
          500: '#0B6E6E',
          600: '#095A5A',
          700: '#074747',
          800: '#053333',
          900: '#032020',
        },
        accent: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
        },
        success: '#059669',
        warning: '#D97706',
        surface: '#F8FAFB',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      animation: {
        'float-a': 'floatA 6s ease-in-out infinite',
        'float-b': 'floatB 8s ease-in-out infinite 1s',
        'spin-slow': 'spin 20s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        floatA: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatB: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'teal-sm': '0 4px 15px rgba(11, 110, 110, 0.15)',
        'teal-md': '0 8px 25px rgba(11, 110, 110, 0.2)',
        'teal-lg': '0 20px 40px rgba(11, 110, 110, 0.15)',
        'mockup': '0 40px 80px rgba(11, 110, 110, 0.15), 0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};