/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#001F3F", // Define your navy blue
        primary: "#000000", // Black
      },
    },
  },
  plugins: [],
};
