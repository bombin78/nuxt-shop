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
    "quotes": [0],
    "no-param-reassign": [2, { "props": false }],
    "import/no-extraneous-dependencies": [0],
  }
};
