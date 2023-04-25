module.exports = {
  content: [
    './src/**/*.{tsx,js}',
    './app.tsx',

  ],
  theme: {
    extend: { colors: {
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
