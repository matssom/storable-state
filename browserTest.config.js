const path = require('path');

module.exports = {
  entry: './test/browser/src/browser.test.js',
  output: {
    path: path.resolve(__dirname, 'test/browser'),
    filename: 'browser.test.js'
  },
  watch: true,
  mode: 'development',
  resolve: {
    alias: {
      buffer : 'buffer'
    }
  }
};