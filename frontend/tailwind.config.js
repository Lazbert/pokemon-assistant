/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pokemon-theme": "url('./src/assets/pokemon-bg.png')",
      },
    },
    animation: {
      "moving-mascot": "moving-mascot 17s linear infinite",
    },
    keyframes: {
      "moving-mascot": {
        "0%": { transform: "translateX(0) rotateY(180deg)" },
        "50%": { transform: "translateX(1700%) rotateY(179deg)" },
        "51%": { transform: "translateX(1700%) rotateY(0deg)" },
        "100%": { transform: "translateX(0)" },
      },
    },
  },
  plugins: [],
};
