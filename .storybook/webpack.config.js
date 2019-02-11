module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })

  defaultConfig.module.rules.push({
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
            './assets/styles/_reset.scss',
            './assets/styles/mixins/_grid-column-width.scss',
            './assets/styles/mixins/_mq.scss',
            './assets/styles/mixins/_visually-hidden.scss',
            './assets/styles/_grid.scss'
          ]
        }
      }
    ]
  })

  defaultConfig.module.rules.push({
    test: /\.vue$/,
    loader: 'eslint-loader',
    options: {
      fix: true
    }
  })

  return defaultConfig
}
