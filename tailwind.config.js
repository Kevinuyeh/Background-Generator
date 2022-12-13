/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        darkBlue: 'hsl(228, 39%, 23%)',
      },
      cursor: {
        'fancy': 'url(hand.cur), pointer',
      },
    },
  },
  plugins: [],
}
