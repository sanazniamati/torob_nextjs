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
        tablet: "655px",
        // => @media (min-width: 655px) { ... }
        md: "900px",
        //  => @media (min-width: 900px) { ... }
        "1040-screen": "1040px",
        lg: "1200px",
        // => @media (min-width: 1200px) { ... }
      },
      borderRadius: {
        5: "5px",
      },
      colors: {
        rose: "#c83635",
        gray: "#616161",
      },
      maxWidth: {
        "9xl": "1400px",
        "1/2": "50%",
      },
      boxShadow: {
        footer: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
