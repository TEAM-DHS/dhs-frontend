/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // 1280 ~ : none
      // 768 ~ 1279 : laptop
      laptop: { max: "1279px" },
      // ~ 767 : mobile
      mobile: { max: "767px" },
      // ~ 1150 : item column 2
      twocol: { max: "1150px" },
      // ~ 705 : item column 2
      onecol: { max: "705px" },
    },
    extend: {
      colors: {
        mainBlue: "#185ADB",
        lightBlue: "#B1CCFF",
        vibrantBlue: "#27A3FF",
        darkBlue: "#292D32",
        whiteBlue: "#E4EDFF",
        blueGray: "#CEDAF3",
        darkGray: "#7C7C7C",
        lightGray: "#E1E1E1",
        warningRed: "#F96353",
        slateBlack: "#404040",
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
        md: "16px",
        p: "14px",
        sm: "12px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
