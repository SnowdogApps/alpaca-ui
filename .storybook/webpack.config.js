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
          resources: './styles/styles.scss'
        }
      }
    ]
  });
  return defaultConfig;
};
