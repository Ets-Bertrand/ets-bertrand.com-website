import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand charter — "colours of the sea" blue gradient on white.
        brand: {
          DEFAULT: '#0112E8', // primary
          50: '#eef2ff',
          100: '#dbe4ff',
          200: '#b5dafb',
          300: '#9cc8f9',
          400: '#63a2f8',
          500: '#4258f9', // secondary indigo
          600: '#0112e8',
          700: '#010fbf',
          muted: '#7897ce',
        },
        accent: {
          // Slogan / "made in France" red — use sparingly.
          DEFAULT: '#cd1719',
        },
      },
      fontFamily: {
        // Charter fonts (self-hosted), with robust fallbacks.
        sans: ['Oblivian', 'Poppins', 'Lato', 'Open Sans', 'system-ui', 'sans-serif'],
        display: ['Conneqt', 'Poppins', 'Playfair Display', 'Georgia', 'serif'],
        script: ['Abuget', 'Brush Script MT', 'cursive'],
      },
      maxWidth: {
        content: '80rem',
      },
      borderRadius: {
        xl: '0.9rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(1, 18, 232, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
