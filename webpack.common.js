const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
module.exports = {
  entry: {
    index: path.join(__dirname, './src/index.js'),
    authenticate: path.join(__dirname, './src/authenticate/authenticate.js'),
    profile: path.join(__dirname, './src/profile/profile.js'),
    main: path.join(__dirname, './src/main.js'),
    reminders: path.join(__dirname, './src/reminders/reminders.js'),
    serviceWorker: path.join(__dirname, './src/serviceWorker.js'),
    members: path.join(__dirname, './src/members/members.js'),
    remindersAdd: path.join(__dirname, './src/reminders/add/reminders.add.js'),
    membersAdd: path.join(__dirname, './src/members/add/members.add.js'),
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
    new WebpackPwaManifest({
      name: 'Smriti',
      short_name: 'Smriti',
      description: 'Alzheimer patient assistant',
      background_color: '#ffffff',
      'theme-color': '#ffffff',
      filename: 'manifest.json',
      serviceWorker: '',
      //   crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/icon-1024x1024.png'),
          sizes: [96, 128, 192, 256, 384, 512, 1024], // multiple sizes
        },
        // {
        //   src: path.resolve('src/assets/large-icon.png'),
        //   size: '1024x1024', // you can also use the specifications pattern
        // },
        {
          src: path.resolve('src/assets/icon-1024x1024.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
      //   apple : tr
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.ejs'),
      filename: path.join(__dirname, '/dist/index.html'),
      chunks: ['index', 'main', 'serviceWorker'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/authenticate/index.ejs'),
      filename: path.join(__dirname, '/dist/authenticate/index.html'),
      chunks: ['authenticate', 'main', 'serviceWorker'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/profile/index.ejs'),
      filename: path.join(__dirname, '/dist/profile/index.html'),
      chunks: ['profile', 'main', 'serviceWorker'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/reminders/index.ejs'),
      filename: path.join(__dirname, '/dist/reminders/index.html'),
      chunks: ['reminders', 'main', 'serviceWorker'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/reminders/add/index.ejs'),
      filename: path.join(__dirname, '/dist/reminders/add/index.html'),
      chunks: ['remindersAdd', 'main', 'serviceWorker'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/members/index.ejs'),
      filename: path.join(__dirname, '/dist/members/index.html'),
      chunks: ['members', 'main', 'serviceWorker'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/members/add/index.ejs'),
      filename: path.join(__dirname, '/dist/members/add/index.html'),
      chunks: ['membersAdd', 'main', 'serviceWorker'],
    }),
  ],
};
