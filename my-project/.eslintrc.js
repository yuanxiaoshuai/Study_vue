// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true
    },
    sourceType: 'module'
  },
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    //'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    "eslint:recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'arrow-parens': 0,
    'generator-star-spacing':  0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ?  2:  0
  }
}
