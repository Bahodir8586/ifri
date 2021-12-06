module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'next', 'next/core-web-vitals'],
  rules: {
    'react/display-name': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-duplicate-props': 'off',
    'react/no-array-index-key': 'off',
    semi: ['error', 'never'],
    '@next/next/no-img-element': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', '.']],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
}
