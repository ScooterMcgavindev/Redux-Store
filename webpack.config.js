const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** vars */
let mode = 'development';
const plugins = [
  new HtmlWebpackPlugin({
    template: './client/index.html',
  }),
];

/** prod / dev mode */
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode: mode,
  /** Entry and Output */
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  /** Target Extensions */
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  /** Module Rules */
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  /** Plugins */
  plugins: plugins,
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    hot: true,
    open: true,
  },
};
