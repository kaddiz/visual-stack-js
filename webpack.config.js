var ENV = process.env.NODE_ENV
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	context: __dirname,
	devtool: ENV != "production" ? "inline-sourcemap" : null,
	entry: "./src/index.js",
	output: {
		path: __dirname + "/build/",
		filename: "bundle.js"
	},
	module: {
		preLoaders: [
			{
				test: /\s[a|c]ss$/,
				exclude: /node_modules/,
				loader: 'sasslint',
			},
		],
		loaders: [
			{
				test: [/\.jsx$/, /\.js$/],
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
				}
			},
			{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', "css!sass")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', "css-loader")
      }
		]
	},
	plugins: (ENV == 'production' ? [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.UglifyJsPlugin({minimize: true, compress: { warnings: false }}),
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("production")
       }
    })
  ] : [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("production")
       }
    })
  ])
}
