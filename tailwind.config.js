/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 11px 41px 0 rgba(0, 0, 0, 1)",
        xxl: "0 -1px 21px 0 rgba(0, 0, 0, 1)",
        gold: "0 11px 41px 0 #d8b15d",
        footer: "0 0 10px 1px #000",
      },
      animation: {
        zoom: "zoom .6s ease-in-out forwards",
        rotatescroll: "rotatescroll .7s ease-in-out",
        slideup: "slideup .6s ease-in-out forwards",
        slideright: "slideright .6s ease-in-out forwards",
        hesitate: "hesitate .6s ease-in-out forwards",
        showup: "showup .7s  ease-in-out forwards",
        hideup: "hideup .5s ease-in-out forwards",
        showdown: "showdown .5s ease-in-out forwards",
        hidedown: "hidedown .5s ease-in-out forwards",
        showleft: "showleft .5s .3s ease-in-out forwards",
        scaleleft: "scaleleft .5s ease-in-out forwards",
        hideleft: "hideleft .5s ease-in-out forwards",
        showright: "showright .5s ease-in-out forwards",

        waving: "wave 2s linear",
      },
      keyframes: {
        wave: {
          "0%": { height: "0%", bottom: "100%" },
          "100%": { height: "300px", bottom: "0%" },
        },
        zoom: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        rotatescroll: {
          "0%": { transform: "translate(0, 50vh) rotate(0deg)" },
          "100%": { transform: "translate(0,0) rotate(90deg)" },
        },
        slideup: {
          "0%": { height: "100vh" },
          "100%": { height: "0" },
        },
        slideright: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
        hesitate: {
          "0%": { width: "0%" },
          "80%": { width: "100%" },
          "100%": { width: "100%" },
        },
        showup: {
          "0%": { transform: "translate(0, 100vh)", height: "0" },
          "100%": { transform: "translate(0,0)", height: "100%" },
        },
        hideup: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(0,-100vh)", height: "0" },
        },
        showdown: {
          "0%": { transform: "translate(0, -100vh)", height: "0" },
          "100%": { transform: "translate(0,0)", height: "100%" },
        },
        hidedown: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(0,100vh)", height: "0" },
        },
        showleft: {
          "0%": { transform: "translate(50%)", opacity: 0 },
          "100%": { transform: "translate(0)", opacity: 1 },
        },
        hideleft: {
          "0%": { transform: "translate(0)", opacity: 1 },
          "100%": { transform: "translate(50%)", opacity: 0 },
        },
        showright: {
          "0%": { transform: "translate(-50%)", opacity: 0 },
          "100%": { transform: "translate(0)", opacity: 1 },
        },
        scaleleft: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
