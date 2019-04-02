module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    node: true
  },
  rules: {
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'semi': ['error', 'never'],
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': true,
      'ignores': ['pre', 'textarea']
    }],
    'vue/no-v-html': 1,
    'no-console': 1
  }
}