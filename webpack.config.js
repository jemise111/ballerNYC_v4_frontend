module.exports = {
	context: __dirname + "/app",
	
	entry: {
		javascript: "./scripts/app.js",
		html: "./index.html"
	},

	output: {
		filename: "app.js",
		path: __dirname + "/dist",
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: [
						'es2015',
						'react',
						'stage-1'
					]
				}
			},
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]",
			},
			{
				test: /\.scss$/,
				// loader: "style-loader!raw-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
				loaders: ['style', 'css?sourceMap','sass?sourceMap']
			}
		]
	}
}