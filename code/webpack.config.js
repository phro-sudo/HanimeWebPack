const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle_[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello World"
    })
  ],
  devtool: "cheap-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    proxy: {
      "/hello": "http://localhost:8080/"
    },
    compress: true,
    port: 4200,
  }
}