const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const { ModuleFederationPlugin } = require("webpack").container;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: true, 
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: { presets: ["@babel/preset-react"] },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpeg|gif|jpg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        chat: "chat@http://localhost:3001/remoteEntry.js", 
        mail: "mail@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx"], 
  },
};
