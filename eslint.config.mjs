import globals from 'globals' // Default import for CommonJS module
import prettierPlugin from 'eslint-plugin-prettier' // Prettier plugin

export default [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        ...globals.browser, // Access `browser` from the default import
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',

      // Add blank lines around comments
      'lines-around-comment': [
        'error',
        {
          beforeBlockComment: true, // Blank line before block comments (/* ... */)
          afterBlockComment: false,
          beforeLineComment: true, // Blank line before single-line comments (// ...)
          afterLineComment: false,
          allowObjectStart: true,
          allowArrayStart: true,
          allowBlockStart: true,
          allowBlockEnd: true,
        },
      ],

      // Add blank lines between specific statement types
      'padding-line-between-statements': [
        'error',

        // Ensure a blank line after console.log
        { blankLine: 'always', prev: 'expression', next: '*' },

        // Ensure a blank line after function declarations
        { blankLine: 'always', prev: 'function', next: '*' },

        // Ensure a blank line before return statements
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
    },
  },
]
