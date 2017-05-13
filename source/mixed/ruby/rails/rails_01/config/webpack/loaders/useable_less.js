var path = require('path');
let node_modules_path = path.resolve(__dirname, '../../../', 'node_modules');

module.exports = {
  test: /\.useable\.less$/i,
  use: [
    {loader: "style-loader/useable"},
    {loader: "css-loader"},
    {
      loader: "less-loader",
      options: {
        paths: [node_modules_path]
      }
    },
  ],
}
