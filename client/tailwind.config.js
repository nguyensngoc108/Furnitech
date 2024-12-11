/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",
    "./src/main/**/*.{js,ts,jsx,tsx}",
    "./src/header/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 2px 12px 0px rgba(20, 20, 43, 0.08)',
      }, 

      // set up color 
      colors: {
        "brown": "#220E03",
        'brown-400': '#FAF7F1',
        'brown-600': '#E3DED2',
        'brown-1000': '#948A74',
        'brown-900': '#A79F8B',
        'neutral-text-gray': '#505050',
        'orange-400': '#FF7029',
        'orange-500': '#D74800',
        'black': '#2C0000',
        'lightgray': '#D3D3D3',
        'gray': '#828282',
        'gray- 400': '#8D8D8D',
        'red': '#FF002F',
      },

      // set up font
      fontFamily: {
        "DM Sans": "DM+Sans",
        'Inter' : 'Inter',
      },
      spacing: {
        'spacing-8': 'var(--Spacing-8, 32px)',
        '350': '350px',
      },


    },
    plugins: [

    ],
  },
}
