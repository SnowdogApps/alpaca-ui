const path = require('path')
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
      'sass-loader',
      { loader: 'sass-resources-loader',
        options: {
          sourceMap: true,
          resources: [
            './assets/styles/_variables.scss',
            './assets/styles/mixins/_grid-column-width.scss',
            './assets/styles/mixins/_mq.scss',
            './assets/styles/mixins/_visually-hidden.scss'
          ]
        }
      }
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

  config.resolve.alias = {
    ...config.resolve.alias,
    '@alpaca-storybook': path.resolve(__dirname, '../')
  }

  return config
}
