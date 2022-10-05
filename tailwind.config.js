/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const Revert = plugin(function({addUtilities}){
  addUtilities({
    '.revert-card-y-180': {
      transform: 'rotateY(180deg)',
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective-1000": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    }
  });
});
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [Revert],
}
