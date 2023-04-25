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
        salmon:{
          500: '#FC8585'
        }
     },
     backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    }
   },

},
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
