const path = require('path');

module.exports = env => ({
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, env.DIST)
  },
  devServer: {
    contentBase: path.join(__dirname, env.DIST),
    host: '0.0.0.0',
    port: env.PORT
  }
});
