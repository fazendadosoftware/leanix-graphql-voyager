var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    // "disableHostCheck" added due to issue: https://github.com/webpack/webpack-dev-server/issues/1604
    // Fix should be done with: https://github.com/webpack/webpack-dev-server/pull/1608
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'report.[chunkhash].js'
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      /**
       * Bundle JavaScript (ES6)
       */
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-react-jsx', '@babel/plugin-transform-runtime']
          }
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.(eot|otf|ttf|woff|woff2)$/, use: ['url-loader?limit=10000'] },
      { test: /\.(jpg|png|gif)$/, use: ['url-loader?limit=10000'] },
      { test: /\.(eot|svg)$/, use: ['file-loader'] }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    new CopyWebpackPlugin([{ from: 'node_modules/graphql-voyager/dist/voyager.worker.js' }]),
    new HtmlWebpackPlugin({ inject: true, template: 'src/index.html' })
  ]
}
