module.exports = {
  mode: "jit",
  content: [],
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a071a",
        PWhite: "#efeef4",
        PGrey: "#141124",
        Gold: "#f7c74b",
        Midnight: "#5f758d",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
