/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryRed: "#ff616d ",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        PlayFair: ["Playfair Display", "serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      backgroundImage: {
        mens: "url(/images/mens-img.jpg)",
        female: "url(/images/female-img.jpg)",
        accessory: "url(/images/accessory.jpg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
