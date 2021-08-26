// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

console.log('isProduction', isProduction);
console.log('isDevelopment', isDevelopment);
console.log('dirname', __dirname);

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: {
    main: `${__dirname}/init.jsx`,
  },

  externals: {
    gon: 'gon',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    path: `${__dirname}/dist/public`,
    publicPath: '/assets/',
    filename: '[name].js',
  },

  watch: false,

  watchOptions: {
    aggregateTimeout: 100,
  },

  devtool: isDevelopment ? 'source-map' : false,

  plugins: [
    // new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
console.log('!!!', module.exports.entry.main)