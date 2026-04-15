import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          500: '#e60023',
          600: '#cc001f',
          700: '#a8001a'
        }
      }
    }
  },
  plugins: []
};

export default config;
