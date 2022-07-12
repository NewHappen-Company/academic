module.exports = {
  content: [
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/background.png')",
      },
      spacing: {
        '128': '32rem',
      },
      colors: {
        'contact': 'rgba(107, 104, 144, 0.17)',
        'footer': '#7E7E7E',
        'subtitle': '#CED0D4',
        'base': '#242237'
      }
    },
  },
  plugins: [],
}
