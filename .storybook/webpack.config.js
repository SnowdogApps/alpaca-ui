const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = ({ config, mode }) => {
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
      'components/**/*.vue',
      'components/**/*.scss',
      'assets/styles/**/*.scss'
    ],
    fix: true
  }))

  return config
}
