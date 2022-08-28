/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],    /* Lo que hace el segundo elemento es buscar en todas las carpetas archivos .jsx */
  /* Si en vez de content dice purge es por que esta en la version 2 de tailwind */
  theme: {
    extend: {},
  },
  plugins: [],
}
