/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/App.jsx"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        firacode: ["Fira Code"],
        firamono: ["Fira Mono"],
      },
    },
  },
  plugins: [],
};
