module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: `babel-eslint`
  },
  extends: [
    "@nuxtjs",
    "airbnb-base",
  ],
  // add your custom rules here
  rules: {
    "quotes": ["error", "double",  { avoidEscape: true }],
    "no-param-reassign": [2, { "props": false }],
    "import/no-extraneous-dependencies": [0],
  }
};
