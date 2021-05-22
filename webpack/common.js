const path = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: {
    index: path(__dirname, "..", "src", "index.js"),
  },
  output: {
    filename: "[name].[contenthash:6].js",
    path: path(__dirname, "..", "build"),
  },  
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path(__dirname, "..", "public", "index.html"),
      favicon: "public/KC4.png"
    }),
  //   new CopyWebpackPlugin({ 
  //     patterns: [ 
  //      // relative path is from src
  //      { from: '../src/assets/KC4.png' }, // <- your path to favicon
  //     ]
  //  }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          // Name
          'gifsicle',
          // Name with options
          ['mozjpeg', { quality: 90 }],
          [
            'pngquant',
            {
              quality: [0.9, 0.9],
            },
          ],
          // Full package name 
          [
            'imagemin-svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
};

