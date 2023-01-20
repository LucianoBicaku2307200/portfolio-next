/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#01080E",
        primary2: "#011627",
        primary3: "#011221",
        secondary1: "#607B96",
        secondary2: "#3C9D93",
        secondary3: "#4D5BCE",
        accent1: "#FEA55F",
        accent2: "#43D9AD",
        accent3: "#E99287",
        accent4: "#C98BDF",
        lines: "#1E2D3D",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
