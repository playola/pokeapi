const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '#components': path.resolve(__dirname, './src/components'),
      '#pages': path.resolve(__dirname, './src/pages'),
      '#routes': path.resolve(__dirname, './src/routes'),
      '#services': path.resolve(__dirname, './src/services'),
      '#static': path.resolve(__dirname, './src/static'),
      '#store': path.resolve(__dirname, './src/store'),
      '#style': path.resolve(__dirname, './src/styles'),
      '#utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
