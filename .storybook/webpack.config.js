const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')

module.exports = ({ config }) => {
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

  /* PostCSS Support */
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      }
    ]
  })

  config.module.rules.push({
    enforce: 'pre',
    test: /\.(js|vue)$/,
    exclude: /node_modules/,
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

  config.resolve.alias = {
    ...config.resolve.alias,
    '@utils': path.resolve(__dirname, '../utils')
  }

  return config
}
