/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Ruda', 'sans-serif'],
      'serif': ['Quattrocento', 'serif'],
      'montserrat': ['Montserrat', 'SFMono-Regular'],
      'lora': ['Lora', 'serif'],
    },
    extend: {
      colors: {
        'gold': '#B48700',
        'red-italy': '#CE2B37',
        'white-italy': '#F1F2F1',
        'green-italy': '#009246',
        'yellow-pastel': '#F2C94C',
        'grey-dark': '#2D2D2D',
        'almost-black': '#141414',
        'grey-medium': '#6C6C6',
        'grey-light': '#ABABA'
      },
      backgroundImage: {
        'home-bg-top': "url(https://fiore-di-lis-2.s3.us-east-2.amazonaws.com/assets/Home/Section/Top/background-header.png)",
        'home-bg-bottom': "url(https://fiore-di-lis-2.s3.us-east-2.amazonaws.com/assets/Home/Section/Bottom/background-bottom.png)",
      }
    }
  },
  plugins: [],
}


