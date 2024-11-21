{
  "env": {
    "browser": true,
      "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
    "parserOptions": {
    "ecmaVersion": 12,
      "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": "error"
    "padding-line-between-statements": [
      "error",
      // Ensure a blank line before comments
      { "blankLine": "always", "prev": "*", "next": "comment" },
      // Ensure a blank line after console.log statements
      { "blankLine": "always", "prev": "expression", "next": "*" }
    ]
  }
}
