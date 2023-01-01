// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: [
    'react-app',
    'airbnb-base',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    },
  },
  rules: {
    'linebreak-style': 'off',
    'max-len': [
      'warn',
      150,
    ],
    // Storybook adds its own devDependencies, so we disable this rule.
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'object-curly-newline': 'off',
    'default-param-last': 'off',
    indent: 'off',
    'no-unused-vars': 'off',
    'import/extensions': [
      'error', 'never', {
        json: 'always',
        css: 'always',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          // '../../folder/file'
          'parent',
          // './folder/file'
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: { order: 'asc' },
      },
    ],
  },
};
