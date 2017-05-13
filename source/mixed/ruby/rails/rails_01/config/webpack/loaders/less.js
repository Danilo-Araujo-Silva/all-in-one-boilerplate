const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  test: /\.(less)$/i,
  exclude: /\.useable\.less$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'postcss-loader', 'less-loader']
  })
}
