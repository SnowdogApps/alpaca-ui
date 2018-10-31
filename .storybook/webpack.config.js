module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'sass-loader'
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
};
