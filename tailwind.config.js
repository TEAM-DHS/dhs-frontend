/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#185ADB",
        lightBlue: "#B1CCFF",
        vibrantBlue: "#27A3FF",
        blueGray: "#CEDAF3",
        darkGray: "#7C7C7C",
        lightGray: "#E1E1E1",
        warningRed: "#F96353",
      },
      fontFamily: {
        bold: ["LINESeedKR-Bd", "sans"],
        regular: ["LINESeedKR-Rg", "sans"],
        thin: ["LINESeedKR-Th", "sans"],
      },
      fontSize: {
        lgTitle: "38px",
        mdTitle: "22px",
        smTitle: "18px",
        p: "14px",
        sm: "12px",
      },
    },
  },
  plugins: [],
};
