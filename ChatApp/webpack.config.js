const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const { ModuleFederationPlugin } = require("webpack").container;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
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
        options: { 
          presets: ["@babel/preset-react"],
        },
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
      name: "chat",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(), 
  ],
};
