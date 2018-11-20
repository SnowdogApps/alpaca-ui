module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  env: {
    node: true
  },
  rules: {
    "vue/html-closing-bracket-newline": [2, {
      "singleline": "never",
      "multiline": "always"
    }]
  }
}
