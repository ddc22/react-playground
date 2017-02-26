var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/scripts.js",
  module:{
    loaders:[
        {
            test:/\.js?$/,
            exclude:/(node_modules|bower_components)/,
            loader: 'babel-loader',
            query:{
                presets:['react','es2015','stage-0'],
                plugins:['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
        }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};