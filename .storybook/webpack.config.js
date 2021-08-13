const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')

module.exports = ({ config }) => {

  config.module.rules.push({
    enforce: 'pre',
    test: /\.(js|vue)$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      emitWarning: true
    }
  })
  config.plugins.push(new StyleLintPlugin({
    files: [
      'src/**/*.vue',
      'src/**/*.css',
      'assets/styles/**/*.css'
    ],
    fix: true
  }))

  config.resolve.alias = {
    ...config.resolve.alias,
    '@utils': path.resolve(__dirname, '../utils'),
    '@atoms': path.resolve(__dirname, '../src/atoms'),
    '@molecules': path.resolve(__dirname, '../src/molecules'),
    '@organisms': path.resolve(__dirname, '../src/organisms'),
    '@mocks': path.resolve(__dirname, '../mocks')
  }

  return config
}
