module.exports = {
  content: [
    './src/**/*.{tsx,js}',
    './app.tsx',

  ],
  theme: {
    fontFamily:{
      'display':['Poppins'],
      'display-bold':['Poppins-Bold'],
      'title': ['Slackey'],
     },
    extend: { 
      colors: {
        primary: {
          100: '#FCF2E2',
          600: '#E0A171',
          'std': '#C45100',
        },
     },
   },

},
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
