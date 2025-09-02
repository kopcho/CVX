/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cvx: {
          blue: { 900: '#0f206c', 700:'#123083', 600:'#416ba9', 300: '#6aaae4' },
          green: { 500: '#93d500' },
          yellow: { 500: '#e0cc00' },
          black: '#1D1D1B',
          white: '#ffffff'
        }
      },
          boxShadow: {
            soft: '0 10px 30px rgba(11,27,66,.08)'
          },
          borderRadius: {
            xl2: '1rem'
          }
    }
  },
  plugins: []
};
