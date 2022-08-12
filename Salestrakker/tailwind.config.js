/** @type {import('tailwindcss').Config} */
module.exports = {


  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        hamburger_puls: {
          '0% ':{
            transform: 'scale(0.8)', 'box-shadow': '0 0 0 0 gray'
        },
        '70%': {
            transform: 'scale(1)',
            'box-shadow': '0 0 0 10px gray'
        },
    
        '100%': {
            transform: 'scale(0.8)'
        }
        },
      },
      
      animation: {
        'waving-hand': 'hamburger_puls 5s ease-in-out  infinite',
    
      },
    },
  },
  plugins: [],
}
