/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#FF6584",
        accent: "#00C9A7",
        warning: "#FFD93D",
        info: "#6EC1E4",
        bgLight: "#F0F4FF",
        bgCard: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
