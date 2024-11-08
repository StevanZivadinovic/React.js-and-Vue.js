/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    screens: {
      'mobile': {'max': '639px'},  // => @media (max-width: 639px) { ... }
      'tablet': {'max': '1023px'}, // => @media (max-width: 1023px) { ... }
      'laptop': {'max': '1279px'}, // => @media (max-width: 1279px) { ... }
      'desktop': {'max': '1535px'}, // => @media (max-width: 1535px) { ... }
    },
    extend: {
      backgroundImage:{
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles (Preflight reset)
  },
}
