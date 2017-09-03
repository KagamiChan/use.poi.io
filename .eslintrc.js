module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': 'off',
  },
  settings: {
    'import/core-modules': [
      'react',
    ]
  }
}
