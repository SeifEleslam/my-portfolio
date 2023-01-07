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
        'gold': '0 11px 41px 0 #aaa',
        'footer': '0 0 10px 1px #000'
      },
      animation: {
        zoom: 'zoom 1.4s ease-in-out forwards',
        zoomreverse: 'zoom 1.9s ease-in-out reverse forwards',
        rotatescroll: 'rotatescroll 1.5s ease-in-out',
        slideup: 'slideup 1s ease-in-out forwards',
        slideright: 'slideright 1s ease-in-out forwards',
        sliderightreverse: 'slideright 1s ease-in-out reverse forwards',
        hesitate: 'hesitate 1.1s ease-in-out forwards',
        hesitatereverse: 'hesitate 1.1s ease-in-out reverse forwards',
        showup: 'showup 1.5s ease-in-out forwards',
        hideup: 'hideup 1.5s ease-in-out forwards',
        showdown: 'showdown 1.5s ease-in-out forwards',
        hidedown: 'hidedown 1.5s ease-in-out forwards',
        showleft: 'showleft 1s ease-in-out forwards',
        hideleft: 'hideleft 1s ease-in-out forwards',
        waving: 'wave 2s linear',

      },
      keyframes: {
        wave: {
          '0%': { height: '0%', bottom: '100%' },
          '100%': { height: '300px', bottom: '0%'},
        },
        zoom: {
          '0%': { transform: 'translate(-30px) scale(0.8)'},
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
          '0%': { width: '100%'},
          '100%': { width: '0', },
        },
        hesitate: {
          '0%': { width: '0%' },
          '100%': { width: '100%'},
        },
        showup: {
          '0%': { transform: 'translate(0, 100vh)', height:"0"},
          '100%': { transform: 'translate(0,0)', height:"100%"},
        },
        hideup: {
          '0%': { transform: 'translate(0, 0)'},
          '100%': { transform: 'translate(0,-100vh)', height:"0"},
        },
        showdown: {
          '0%': { transform: 'translate(0, -100vh)', height:"0"}, 
          '100%': { transform: 'translate(0,0)', height:"100%"},
        },
        hidedown: {
          '0%': { transform: 'translate(0, 0)'},
          '100%': { transform: 'translate(0,100vh)', height:"0"},
        },
        showleft: {
          '0%': { transform: 'translate(50%)', opacity:0},
          '100%': { transform: 'translate(0)', opacity:1},
        },
        hideleft: {
          '0%': { transform: 'translate(0)', opacity:1},
          '100%': { transform: 'translate(50%)', opacity:0},
        },
      }
    },
  },
  plugins: [],
};
