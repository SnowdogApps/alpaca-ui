const path = require('path')
const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'sass-loader'
    ]
  })

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'eslint-loader',
    options: {
      fix: true
    }
  })

  config.plugins.push(new StyleLintPlugin({
    files: [
      'src/**/*.vue',
      'src/**/*.scss',
      'assets/styles/**/*.scss'
    ],
    fix: true
  }))

  config.resolve.alias = {
    ...config.resolve.alias,
    'styles': path.resolve(__dirname, '../assets/styles')
  }

  return config
}
