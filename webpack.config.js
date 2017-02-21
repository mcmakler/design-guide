const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app.jsx',
  ],
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname),
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'postcss-loader', 'css-loader?modules', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['js', 'jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname)}/src/index.html`,
    }),
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
