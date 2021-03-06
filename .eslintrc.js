module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],
  env: {
    browser: true,
    node: true,
    jquery: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
  },
  rules: {
    curly: ['error', 'all'],
    'space-before-function-paren': 'off',
    'new-cap': 'off',
    'no-confusing-arrow': 'error',
    'no-tabs': 'error',
    'no-unexpected-multiline': 'error',
  },
}
