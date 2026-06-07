/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e7f1fb',
          100: '#c3d9f5',
          200: '#9cc0ef',
          300: '#73a6e8',
          400: '#4b8de2',
          500: '#1060a8',
          DEFAULT: '#1060a8',
          600: '#0d4e8e',
          700: '#0a3c74',
          800: '#072b5a',
          900: '#041a40',
        },
        gold: {
          50:  '#fef8e7',
          100: '#fdebc4',
          200: '#fbde9e',
          300: '#f9d177',
          400: '#f7c44f',
          DEFAULT: '#c8900e',
          500: '#c8900e',
          600: '#a8780b',
          700: '#886009',
          800: '#684906',
          900: '#483204',
          light: '#f0b92a',
        },
        navy: '#0c2444',
        cream: '#f7f9fd',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins:  ['Poppins', 'system-ui', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0c2444 0%, #1060a8 60%, #1976c8 100%)',
        'gold-gradient': 'linear-gradient(135deg, #c8900e 0%, #f0b92a 100%)',
      },
      animation: {
        'fade-in':   'fadeIn 0.7s ease-out both',
        'slide-up':  'slideUp 0.7s ease-out both',
        'pulse-slow':'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity:'0' },               '100%': { opacity:'1' } },
        slideUp: { '0%': { transform:'translateY(28px)', opacity:'0' }, '100%': { transform:'translateY(0)', opacity:'1' } },
      },
      boxShadow: {
        card:    '0 4px 24px rgba(16,96,168,0.10)',
        hover:   '0 12px 40px rgba(16,96,168,0.18)',
        gold:    '0 4px 20px rgba(200,144,14,0.30)',
      },
    },
  },
  plugins: [],
}