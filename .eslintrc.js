module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      configFile: "./babel.config.json",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    semi: [2, "always"],
    indent: [0, 4],
    "space-before-function-paren": [
      "error",
      {anonymous: "always", named: "never"},
    ],
    "multiline-ternary": ["off"],
    "quote-props": ["error", "as-needed"],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
  },
};
