const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const source = path.resolve(__dirname, "src", "index.ts");
const build = path.resolve(__dirname, "build");

const webpackConfig = {
  entry: source,
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: build,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "development",
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  devServer: {
    contentBase: "./build",
  },
};

module.exports = webpackConfig;
