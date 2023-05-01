/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgprim: "#03001C",
        prim: "#d8b15d",
        sec: "#FF7844",
      },
      boxShadow: {
        "3xl": "0 11px 41px 0 rgba(0, 0, 0, 1)",
        xxl: "0 -1px 21px 0 rgba(0, 0, 0, 1)",
        gold: "0 10px 50px -10px #d8b15d",
        gold1: "0 0px 50px -10px #d8b15d",
      },
    },
  },
  plugins: [],
};
