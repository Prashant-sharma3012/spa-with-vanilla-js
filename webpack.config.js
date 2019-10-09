const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(webp|png|svg|jpg|gif|ttc)$/,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        removeComments: true
      },
    }),
  ],
  resolve: {
    extensions: ["*", ".js"],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
};
