module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  parser: "babel-eslint",
  plugins: ["react", "react-hooks"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/forbid-prop-types": [
      1,
      {
        forbid: ["any"],
      },
    ],
    "react/jsx-one-expression-per-line": [0, { allow: "single-child" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    "import/resolver": "webpack",
  },
};
