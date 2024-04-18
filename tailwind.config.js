/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#e9ece4',
      'secondary': '#e8f2ff',
      'tertiary': '#f2f2f2',
      'dark': '#1a1a1a',
     }),
    extend: {},
  },
  plugins: [],
}