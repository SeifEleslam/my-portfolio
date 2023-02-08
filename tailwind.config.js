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
    },
  },
  plugins: [],
};
