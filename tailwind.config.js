/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 11px 41px 0 rgba(0, 0, 0, 1)',
        'gold': '0 11px 41px 0 rgba(216, 177, 93, .5)'
      },
      animation: {
        zoom: 'zoom 1.9s ease-in-out',
        zoomreverse: 'zoom 1.9s ease-in-out reverse',
        rotatescroll: 'rotatescroll 1.5s ease-in-out ',
        slideup: 'slideup 1s ease-in-out',
        slideright: 'slideright 1.4s ease-in-out',
        sliderightreverse: 'slideright 1.4s ease-in-out reverse',
        hesitate: 'hesitate 1.5s ease-in-out',
        hesitatereverse: 'hesitate 1.5s ease-in-out reverse',
        showup: 'showup 1.5s ease-in-out',
        showleft: 'showleft 1s ease-in-out'
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'translate(-30px) scale(0.9)'},
          '100%': { transform: 'translate(0) scale(1)'},
        },
        rotatescroll: {
          '0%': { transform: 'translate(0, 50vh) rotate(0deg)'},
          '100%': { transform: 'translate(0,0) rotate(90deg)'},
        },
        slideup: {
          '0%': { height: '100vh'},
          '100%': { height: '0'},
        },
        slideright: {
          '0%': { width: '100%',  },
          '100%': { width: '0', },
        },
        hesitate: {
          '0%': { width: '0%' },
          '100%': { width: '100%'},
        },
        showup: {
          '0%': { transform: 'translate(0, 100vh)'},
          '100%': { transform: 'translate(0,0)'},
        },
        showleft: {
          '0%': { transform: 'translate(100px)', opacity:0},
          '100%': { transform: 'translate(0)', opacity:1},
        },
      }
    },
  },
  plugins: [],
};
