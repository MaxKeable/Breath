/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
    },
    backgroundImage: {
      landingPageHero: "url('../src/Assets/images/landingHeroImage.png')",
      backgroundImage: "url('../src/Assets/images/imageBackground.png')"
    },
    colors: {
   backgroundBrown: "#574F3D",
   lightText: "#EBE0C6",
   opaqueBrown: "#4E371F",
   darkMenu: "#423E35",
   goldHamburger: "#8F7538",
   goldButton: "#AE882B",
   buttonBorder: "#4E371F",
   darkBrownBackground: "#2F2B22",
   goldButtonBorder: "#98783F"
 },
    extend: {}
  },
  plugins: []
};
