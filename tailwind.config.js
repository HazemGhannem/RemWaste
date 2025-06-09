/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#5CE65C",
          orange: "#f68b1e",
          darkGray: "#344044",
          grayText: "#787878",
          warningYellow: "#eab308",
          alertRed: "#ef4444",
          grayFooter: "#908e8f",
        },
      },
      keyframes: {
        slideUpFade: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideUpFade: "slideUpFade 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
