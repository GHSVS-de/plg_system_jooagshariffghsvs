const {
	originalAuthor,
  author,
  contributors,
	originalHomepage,
  homepage,
  license,
	originalName,
  name,
  title,
	originalVersion,
  version,
} = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const extractLess = new ExtractTextPlugin({filename: '[name].css'})

const baseConf = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [
            {
              loader: 'css-loader'
            },
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                strictMath: true,
                noIeCompat: true,
                // paths: [
                //   path.resolve(__dirname, 'node_modules')
                // ],
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    extractLess,
    new webpack.BannerPlugin({
      banner: `${title || originalName} - v${originalVersion} - ${(new Date()).toGMTString()}
${originalHomepage}
Copyright (c) ${(new Date()).getFullYear()} ${originalAuthor.name}, ${contributors.map(c => c.name).join(', ')}
Licensed under the ${license} license

Edited clone ${name} - v${version}
${homepage}
The original code has been changed/edited by 
${author.name}
`
    })
  ],
}

module.exports = [
  Object.assign({}, baseConf, {
    entry: {
      'shariff.complete': './src/js/shariff.complete',
    }
  }),
  Object.assign({}, baseConf, {
    entry: {
      'shariff.min': './src/js/shariff.min'
    },
    externals: {
      './dom': 'jQuery',
    },
  }),
]
