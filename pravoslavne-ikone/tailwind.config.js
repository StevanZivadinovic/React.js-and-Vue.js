/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {

    fontFamily: {
      'cormorant':['Cormorant'],
      'pacifico':['Pacifico']
    },
    screens: {
      'mobile': {'max': '639px'},  // => @media (max-width: 639px) { ... }
      'tablet': {'max': '1023px'}, // => @media (max-width: 1023px) { ... }
      'laptop': {'max': '1279px'}, // => @media (max-width: 1279px) { ... }
      'desktop': {'max': '1535px'}, // => @media (max-width: 1535px) { ... }
    },
    extend: {
      colors: {
        customGray: 'rgb(28, 27, 27)',
        customRed: 'rgb(216, 86, 86)',
      },
      backgroundImage:{
        'kontaktBg':"url(/src/assets/ikona43.png)",
        'uvodHomeBg':"url('/src/assets/pozadina-home.jpg')",
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles (Preflight reset)
  },
}
