const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    authenticate: './src/authenticate/authenticate.js',
    profile: './src/profile/profile.js',
    main: './src/main.js',
    reminders: './src/reminders/reminders.js',
    serviceWorker: './src/service-worker.js',
  },

  module: {
    rules: [
      { test: /\.ejs$/i, use: [{ loader: 'ejs-easy-loader' }] },

      {
        test: /\.(svg|png|jpe?g|gif|mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.ejs'),
      filename: path.join(__dirname, '/dist/index.html'),
      chunks: ['index', 'main'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/authenticate/index.ejs'),
      filename: path.join(__dirname, '/dist/authenticate/index.html'),
      chunks: ['authenticate', 'main'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/profile/index.ejs'),
      filename: path.join(__dirname, '/dist/profile/index.html'),
      chunks: ['profile', 'main'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/reminders/index.ejs'),
      filename: path.join(__dirname, '/dist/reminders/index.html'),
      chunks: ['reminders', 'main'],
    }),
  ],
};
