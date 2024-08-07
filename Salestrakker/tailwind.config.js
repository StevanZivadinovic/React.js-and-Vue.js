/** @type {import('tailwindcss').Config} */
module.exports = {


  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'awesome':['FontAwesome']
    },
    extend: {
      colors:{
        'dark-mode-mainBg':'rgb(33,37,41)'
      },
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
        arrow_translate:{
          '0%':{
            transform:'translateX(-5px)'
          },
          '100%':{
            transform:'translateX(0px)'
          }
        }
      },
      
      animation: {
        'waving-hand': 'hamburger_puls 5s linear  infinite',
        'arrow_animation':'arrow_translate 2s linear infinite'
    
      },
    },
  },
  plugins: [],
}
