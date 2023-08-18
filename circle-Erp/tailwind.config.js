/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-82.5%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-51.5%)' },
        },
        opacity:{
          '0%':{opacity:'0'},
          '50%':{opacity:'0'},
          '100%':{opacity:'100'},
        }
      },
      animation:{
        'marquee-infinite' : 'marquee 25s linear infinite',
        'sm-marquee-infinite' : 'marquee2 25s linear infinite',
        'md-marquee-infinite' : 'marquee3 25s linear infinite',
        'opacity':'opacity 1s linear   '


      }
    },
  },
  plugins: [],
}