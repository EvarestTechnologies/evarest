/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#f0fdf4',
          500: '#10b981',
          600: '#059669',
        },
        // Evarest brand, from the logo: purple #A015DC, mint #50E3C2.
        'brand-navy': '#1A0F24',
        'brand-blue': {
          50: '#F7EFF9',
          100: '#EEDDF5',
          200: '#DDBBEB',
          300: '#C68EE0',
          400: '#A015DC',
          500: '#861DAF',
          600: '#791A9E',
          700: '#5E1480',
          800: '#47105F',
          900: '#2A0A3A',
        },
        'brand-cyan': {
          400: '#50E3C2',
          500: '#2CC9A5',
          600: '#1B8F75',
        },
        'brand-gray': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      fontSize: {
        '7xl': '72px',
        '8xl': '96px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-up-delayed': 'slideUp 0.5s ease-out 0.2s both',
        'scale-in': 'scaleIn 0.4s ease-out 0.6s both',
        'glow': 'glow 2s ease-in-out infinite',
        'scroll': 'scroll 40s linear infinite',
        'pause-animation': 'paused',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(160, 21, 220, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(160, 21, 220, 0.6)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

