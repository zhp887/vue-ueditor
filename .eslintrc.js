// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi':[0,'always'],//分号
    // 'indent':0
    "space-before-blocks": [1, "always"], //代码块前的空格
    "space-before-function-paren": [0, "always"],//函数定义时，function关键字后面的小括号前是否需要加空格
    "quotes": [0, "never"],
    "comma-dangle": [0, "never"],//最后一个逗号控制,
    "no-undef": 0,
    "no-constant-condition": 0,
  }
}
