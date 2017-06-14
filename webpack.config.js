const webpack            = require('webpack')
const path               = require('path')
const CSSNext            = require('postcss-cssnext')
const PostCSSImport      = require('postcss-import')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'components.js'
	},
  module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { modules: true, localIdentName:'[name]_[local]_[hash:base64]', importLoaders: 1 } },
					{ loader: 'postcss-loader', options: { plugins: () => [CSSNext, PostCSSImport] } }
				]
			}
		]
  },
	resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'src')
		],
		extensions: ['.js', '.json', '.css'],
	},
	devServer: {
		historyApiFallback: true
	},
	devtool: 'eval-source-map'
}
