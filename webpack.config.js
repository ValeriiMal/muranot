const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'soucemaps',
  entry: './src/bootstrap.ts',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: [ '.js', '.ts' ],
    modules: [
      'node_modules',
      'src',
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'ts-loader',
      },
      {
        test: /\.html/,
        loader: 'raw-loader',
      },
      {
        test: /\.css/,
        loaders: ['style-loader',  'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ]
}
