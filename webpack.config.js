const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('bundle.css');

const config = {
  context: __dirname + '/src',
  entry: './js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    },{
      test: /\.(css|scss)$/,
      loader: extractCSS.extract(['css-loader', 'sass-loader'])
    },{
      test: /\.js$/,
      include: __dirname + '/src',
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }]
  },
  plugins: [
    extractCSS,
    new webpack.DefinePlugin({
      'process.env': {
        'something': JSON.stringify(process.env),
        'ENV': JSON.stringify(require(__dirname + '/src/development' + '.config.js')),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || "development")
      }
    })
  ]
};

module.exports = config;
