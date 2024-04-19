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
    keyframes: {
      flow: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' }
      },
    },
    animation: {
      flow: 'flow 15s ease infinite',
    },
    backgroundImage: {
      'gradient-flow': 'linear-gradient(270deg, var(--tw-color-primary), #ffffff, var(--tw-color-secondary))'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#e9ece4',
      'secondary': '#e8f2ff',
      'tertiary': '#f2f2f2',
      'dark': '#1a1a1a',
     }),
     backgroundImage: theme => ({
      'gradient-flow': `linear-gradient(270deg, #e9ece4, #ffffff, #e8f2ff)`,
      'fade-primary-to-white': `linear-gradient(to bottom, ${theme('colors.primary')}, #ffffff)`,
    }),
    extend: {
      
    },
  },
  plugins: [],
}