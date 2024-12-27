/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "rubik-extra-bold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-semi-bold": ["Rubik-SemiBold", "sans-serif"],
      },
      colors: {
        "primary-1": "#0061FF",
        "primary-2": "#0061FF1A",
        "primary-3": "#0061FF0D",
        "black-1": "#191D31",
        "black-2": "#666876",
        "black-3": "#8C8E98",
      },
    },
  },
  plugins: [],
};
