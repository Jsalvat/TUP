module.exports = {
  // añade la opción "parser" con "babel-eslint"
  parser: '@typescript-eslint/parser',

  // añade "prettier" (y si quieres "prettier/react") a las opciones de "extends"
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],

  // y por ultimo, en la llave de "plugins" añade el plugin de eslint para prettier
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    indent: 'off',
    allowTemplateLiterals: 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
};
