module.exports = {
  'moduleNameMapper': {
    '^vue$': 'vue/dist/vue.common.js'
  },
  'moduleFileExtensions': [
    'js',
    'vue'
  ],
  'testMatch': ['<rootDir>/src/**/?(*.)+(spec|test).(ts|tsx|mjs|js|jsx)'],
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  },
  'collectCoverage': true,
  'coverageDirectory': './coverage/',
  'collectCoverageFrom': [
    '**/src/atoms/*/*.vue',
    '!**/atoms/transition-expand/*.vue',
    '**/src/molecules/*/*.vue',
    '**/src/organisms/*/*.vue',
    '**/src/templates/*/*.vue',
    '**/src/pages/*/*.vue'
  ]
}
