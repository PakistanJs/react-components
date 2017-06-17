const path = require('path');
const loaders = require('loaders');

module.exports = {
	title: 'PakistanJS React Components',
	components: './src/components/[A-Z]*',
	theme: {
		baseBackground: '#fdfdfc',
		link: '#274e75',
		linkHover: '#90a7bf',
		border: '#e0d2de',
		font: ['Raleway', 'sans-serif'],
	},
	styles: {
		SectionHeading: {
			heading: {
				fontSize: '36px',
				fontWeight: '400',
				fontFamily: '"Raleway", sans-serif'
			},
			pathLine: {
				fontSize: '12px'
			}
		},
		TabButton: {
			button: {
				textTransform: 'capitalize',
				fontFamily: '"Raleway", sans-serif'
			}
		},
		Playground: {
			root: {
				borderRadius: 0,
				borderWidth: [[0, 0, 1, 0]],
			},
			codeToggle: {
				marginTop: 1,
				border: 0,
			},
			hideCode: {
				background: 'none',
			},
		},
		Markdown: {
			para: {
				color: '#555',
				fontSize: '14px',
				fontFamily: '"Raleway", sans-serif',
			},
			pre: {
				border: 0,
				background: 'none',
			},
			code: {
				fontSize: 14,
			},
		},
	},
	template: './src/styleguide/index.html',
	getComponentPathLine(componentPath) {
		const name = path.basename(componentPath, '.js');
		return `import { ${name} } from 'components/pkjs-react-components';`;
	},
	webpackConfig: Object.assign({},
		require('./webpack.config.js'),
		{
			resolve: {
				alias: {
					// Override Styleguidist components
					'rsg-components/Wrapper': path.join(__dirname, 'src/styleguide/components/Wrapper'),
					'rsg-components/Logo': path.join(__dirname, 'src/styleguide/components/Logo'),
					'rsg-components/StyleGuide/StyleGuideRenderer': path.join(
						__dirname,
						'src/styleguide/components/StyleGuide'
					),
				},
			},
			module: {
				loaders: [
					loaders.babel,
					{ test: /\.(jpg|png)$/, loader: 'url-loader' },
					{
						test: /\.css$/,
						loader: 'style-loader!css-loader?modules',
					},
				],
			},
		}
	)
};
