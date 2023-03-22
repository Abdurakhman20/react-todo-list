/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    container: {
      padding: "20px",
      center: true,
    },
    extend: {
      flex: {
        "1-0-auto": "1 0 auto",
        "0-0-auto": "0 0 auto",
      },
    },
  },
  plugins: [],
};
