const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: 'gstin-validator.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    fs: {}
  }
};
