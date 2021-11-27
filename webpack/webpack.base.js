const { ProvidePlugin } = require("webpack")
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const scriptExtensions = /\.(tsx|ts|js|jsx|mjs)$/;
const imageExtensions = /\.(bmp|gif|jpg|jpeg|png)$/;
const fontsExtension = /\.(eot|otf|ttf|woff|woff2)$/;

const PATHS = {
  src: path.join(__dirname, '../src')
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      "@": `${PATHS.src}/client`,
    }
  },
  module: {
    rules: [
      {
        test: scriptExtensions,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: fontsExtension,
        type: 'asset',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: imageExtensions,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new ProvidePlugin({
      React: 'react'
    })
  ]
};
