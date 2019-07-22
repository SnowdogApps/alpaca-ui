module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-console': 1,
    'no-useless-escape': 1,
    'no-restricted-imports': [2, { 'paths': ['lodash-es'] }],
    'prefer-arrow-callback': 1,
    'semi': ['error', 'never'],
    'vue/attributes-order': 1,
    'vue/max-attributes-per-line': 1,
    'vue/order-in-components': 2,
    'vue/no-confusing-v-for-v-if': 1,
    'vue/no-v-html': 1,
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': true,
      'ignores': ['pre', 'textarea']
    }]
  }
}
