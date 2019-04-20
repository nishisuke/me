const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, env.DIST)
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  devServer: {
    host: env.HOST,
    port: env.PORT
  }
});
