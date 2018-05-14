module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/prefer-stateless-function': [{ ignorePureComponents: true }],
    'function-paren-newline': ['error', 'consistent'],
    'arrow-body-style': [0, 'never'],
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'prefer-destructuring': ['error', { object: false, array: false }],
    'react/forbid-prop-types': ['error', { forbid: [] }],
    'react/prop-types': 0,
    'max-len': [
      2,
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        tabWidth: 2,
      },
    ],
    'no-underscore-dangle': ['error', { allow: ['__PRELOADED_STATE__'] }],
    'no-unused-expressions': 0,
    'react/no-unused-prop-types': 0,
    'no-unneeded-ternary': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/no-array-index-key': 0,
  },
};