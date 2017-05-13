var path = require('path');
let assets_stylesheets = path.resolve(__dirname, '../../../', 'app', 'assets', 'stylesheets');
let node_modules_path = path.resolve(__dirname, '../../../', 'node_modules');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  test: /\.(scss|sass|css)$/i,
  exclude: /\.useable\.(scss|sass|css)$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {loader: "css-loader"},
      {loader: "postcss-loader"},
      {
        loader: "sass-loader",
        options: {
          includePaths: [
            assets_stylesheets,
            node_modules_path
          ]
        }
      },
    ]
  })
};
