module.exports = (storybookBaseConfig, configType, defaultConfig) => {
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
            './assets/styles/mixins/_grid-column-width.scss',
            './assets/styles/mixins/_mq.scss',
            './assets/styles/mixins/_visually-hidden.scss'
          ]
        }
      }
    ]
  })

  defaultConfig.module.rules.push({
    test: /\.vue$/,
    enforce: 'pre',
    loader: 'prettier-loader',
    options: {
      parser: 'vue',
      resolveConfigOptions: {
        editorconfig: true
      }
    }
  })

  defaultConfig.module.rules.push({
    test: /\.vue$/,
    loader: "eslint-loader"
  })

  return defaultConfig
}
