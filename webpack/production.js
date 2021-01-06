const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /\.module.scss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // {
      //   test: /\.(json)$/,
      //   type: "javascript/auto",
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[folder]/[name].[ext]",
      //         outputPath: "public/locales/"
      //       }
      //     }
      //   ]
      // }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "/static/css/style.[contenthash:6].css",
      chunkFilename: "/static/cssstyle.[contenthash:6].css",
      publicPath: "./static/css",
    }),
  ],
};
