'use strict';

var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname, '../');
var BUILD_PATH = path.resolve(__dirname, '../', 'dist');
var APP_PATH = path.resolve(__dirname, '../', 'server');

var sassLoaders = [
  'css',
  'postcss',
  'sass?outputStyle=compressed&includePaths[]=' + path.resolve(__dirname, '../app')
];

var configs = {
  target: 'node',
  context: ROOT_PATH,
  cache: false,
  entry: APP_PATH + '/index.js',
  output: {
    path: BUILD_PATH,
    filename: "server.js"
  },
  resolve: {
    root: ROOT_PATH,
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      { 
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.js(x)?$/,
        loaders: ['babel'],
        exclude: /node_modules/ 
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(false),
        NODE_ENV: JSON.stringify('production')
      }
    }),
    //new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]
};

module.exports = configs;
