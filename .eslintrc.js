module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb"
  ],
  rules: {
    "generator-star-spacing": [0],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js"
        ]
      }],
    "global-require": [0],
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "import/prefer-default-export": [0],
    // 关闭react默认的props-type验证
    "react/prop-types": [0],
    "react/prefer-stateless-function": [0],
    "no-else-return": [0],
    "no-restricted-syntax": [0],
    "import/no-extraneous-dependencies": [0],
    "no-shadow": [0],
    "no-use-before-define": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "no-nested-ternary": [0],
    "arrow-body-style": [0],
    "import/extensions": [0],
    "no-bitwise": [0],
    // 注释检验
    "linebreak-style": [0],
    "import/no-unresolved": [0],
    "prefer-template": [0],
    "no-undef": [0],
    "no-param-reassign": [0],
    "no-useless-escape": [0],
    "no-plusplus": [0],
    "no-mixed-operators": [0],
    "object-shorthand": [0],
    "no-console": [0],
    "no-loop-func": [0],
    "class-methods-use-this": [0],
    "radix": [0],
    // 一行结束后面有空格就发出警告
    "no-trailing-spaces": [0],
    "comma-dangle": [0],
    // 标识符不能以_开头或结尾
    "no-underscore-dangle": [0],
    "react/require-default-props": [0],
    "no-unused-expressions": [0],
    // 强制组件方法顺序
    // "react/sort-comp": [0],
    "max-lines": [2, 500],
    "max-len": [2, 200],
    // 在JSX中强制布尔属性符号
    "react/jsx-boolean-value": [0],
    // 防止在数组中遍历中使用数组key做索引
    "react/no-array-index-key": [0],
    // 箭头函数参数周围是否加上括号
    "arrow-parens": [0],
    // 非必须使用const定义变量
    "prefer-const": [0],
    // 防止每个文件有多个组件定义
    "react/no-multi-comp": [0],
    // export 暴露可更改的数据。不必须用 const 定义
    "import/no-mutable-exports": [0],
    // 禁止在setState中使用this.state
    'no-access-state-in-setstate': 0,
    // 设置空行和不空行
    'padded-blocks': [2, "never"],
    // 解构赋值的检测
    'react/destructuring-assignment': [0, 'always'],
    // 文件名: 文件名使用帕斯卡命名. 如, ReservationCard.jsx.
    "react/jsx-pascal-case": 2,
    // 为JSX语法使用下列的对其方式
    "react/jsx-closing-bracket-location": 2,
    // 强制在JSX属性（jsx-quotes）中一致使用双引号
    "jsx-quotes": [2, "prefer-double"],
    // 防止在JSX中重复的props
    "react/jsx-no-duplicate-props": 2,
    // 防止没有children的组件的额外结束标签
    "react/self-closing-comp": 0,
    // JSX中不允许使用箭头函数和bind
    "react/jsx-no-bind": [0],
    "no-unused-vars": [2, {
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none"
    }],
    "react/no-unused-state": [0],
    "react/jsx-one-expression-per-line": [0],
    "prefer-destructuring": [0],
    "no-case-declarations": [0],
    // 禁止某些propTypes
    "react/forbid-prop-types": [2, { "forbid": ["any"] }],
    "import/order": [0],
    // 禁止在setState中使用this.state
    "react/no-access-state-in-setstate": [0],
    // 块语句不能为空
    "no-empty": [0],
    "strict": [0],
    // 可以传入children
    "react/no-children-prop": [0],
    // type能用button
    "react/button-has-type": [0],
    "no-return-assign": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    // 长度限制
    "max-len": [0],
    // 需要有相应的proptypes声明
    "react/default-props-match-prop-types": [0]
    // "react/react-in-jsx-scope": [0],
    // "operator-assignment": [0],
    // "no-fallthrough": [0],
    // "eqeqeq": [0],
    // "react/no-unused-prop-types": [0],
  },
  parserOptions: {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
}