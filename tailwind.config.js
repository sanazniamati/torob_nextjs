module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "cols-auto": "repeat(auto-fill, minmax(170px, 1fr))",
      },
      screens: {
        sm: "600px",
        // => @media (min-width: 600px) { ... }
      },
    },
  },
  plugins: [],
};
