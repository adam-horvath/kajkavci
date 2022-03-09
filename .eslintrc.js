module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  globals: {
    require: true,
    document: false,
    Promise: true,
    __DEV__: true,
    module: false,
    __dirname: false,
    safari: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'require-yield': 'off',
    'react/display-name': 'off',
    'no-case-declarations': 'off',
    'no-new-symbol': 'off',
  },
};
