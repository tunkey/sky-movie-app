module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:cypress/recommended',
    'prettier',    
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    complexity: [2, 6],
    'react/jsx-props-no-spreading': ['off'],
  },
};
