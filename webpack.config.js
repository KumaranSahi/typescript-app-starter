const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const source = path.resolve(__dirname, "src","index.js");
const build = path.resolve(__dirname, "build");

const webpackConfig = {
  entry: source,
  output: {
    filename: "[name].bundle.js",
    path: build,
    clean: true,
  },
  mode: "development",
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
};

module.exports = webpackConfig;
