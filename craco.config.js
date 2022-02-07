const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, './src/Components')
      // '@Icons': path.resolve(__dirname, './src/assets/icons'),
      // '@Hooks': path.resolve(__dirname, './src/hooks'),
      // '@Interfaces': path.resolve(__dirname, './src/Interfaces'),
      // '@Redux': path.resolve(__dirname, './src/Redux'),
      // '@Services': path.resolve(__dirname, './src/Services'),
      // '@Definitions': path.resolve(__dirname, './src/Definitions'),
      // '@Assets': path.resolve(__dirname, './src/assets')
    }
  },
  // enable extra bablerc config to inject
  babel: {
    loaderOptions: {
      babelrc: true
    }
  }
}
