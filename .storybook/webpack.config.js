const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require('path')

module.exports = ({ config }) => {

  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
            require('postcss-nested')
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
      'src/**/*.css',
      'assets/styles/**/*.css'
    ],
    fix: true
  }))

  config.resolve.alias = {
    ...config.resolve.alias,
    '@utils': path.resolve(__dirname, '../utils')
  }

  return config
}
