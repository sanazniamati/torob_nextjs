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
        md: "900px",
        //  => @media (min-width: 900px) { ... }
        lg: "1200px",
        // => @media (min-width: 1440px) { ... }
      },
      borderRadius: {
        5: "5px",
      },
      colors: {
        rose: "#c83635",
      },
    },
  },
  plugins: [],
};
