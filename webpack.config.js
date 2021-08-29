const {
	shariffData,
  author,
  homepage,
  name,
  title,
  version,
} = require('./package.json');

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
      banner: `${title || shariffData.name} - v${shariffData.version} - ${shariffData.date}
${shariffData.homepage}
Copyright (c) ${shariffData.year} ${shariffData.author.name}, ${shariffData.contributors.map(c => c.name).join(', ')}
Licensed under the ${shariffData.license} license

!EDITED VERSION!
Edited for Joomla plugin ${name} - v${version}.
Project: ${homepage}.
The original code has been changed/edited by
${author.name} - ${author.url}
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
