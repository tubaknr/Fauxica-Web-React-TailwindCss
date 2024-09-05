/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],  
  theme: {
    extend: {
      colors: {
        customYellow: '#F1E2D1',
        darkBg: "#1A1919",
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    
  ],
}

