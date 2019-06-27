const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
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
    enforce: 'pre',
    test: /\.(js|vue)$/,
    loader: 'eslint-loader'
  })

  config.plugins.push(new StyleLintPlugin({
    files: [
      'src/**/*.vue',
      'src/**/*.scss',
      'assets/styles/**/*.scss'
    ],
    fix: true
  }))

  return config
}
