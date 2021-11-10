import { defineConfig } from 'eslint-define-config';
module.exports = defineConfig({
  // 限制在项目根目录
  root: true,
  // 环境变量
  env: {
    // 浏览器全局变量
    browser: true,
    // node全局变量和作用域
    node: true,
    // 启用除模块外的所有es6特性
    es6: true,
  },
  // 解析器
  parser: 'vue-eslint-parser',
  // 要支持的js语言选项
  parserOptions: {
    // 解析器
    parser: '@typescript-eslint/parser',
    // 支持的es版本
    ecmaVersion: 2021,
    // 输出类型
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 扩展配置文件，支持string或数组
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // 规则
  rules: {
    // 要求函数和类方法显式返回类型
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 禁用any
    '@typescript-eslint/no-explicit-any': 'off',
    // 禁用require
    '@typescript-eslint/no-var-requires': 'off',
    // 不允许空函数
    '@typescript-eslint/no-empty-function': 'off',
    // 禁止在定义前使用
    '@typescript-eslint/no-use-before-define': 'off',
    // 禁止在定义前使用
    'no-use-before-define': 'off',
    // 禁止使用@ts指令后的描述
    '@typescript-eslint/ban-ts-comment': 'off',
    // 禁止使用特定类型
    '@typescript-eslint/ban-types': 'off',
    // 禁止使用！后缀修饰符
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 在导出的函数和类的公共类方法上要求显式的返回和参数类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 禁止未使用的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // 禁止未使用的变量-基础
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // 在函数定义的坐括号前强制使用一致的空格
    'space-before-function-paren': 'off',
    // 强制顺序属性
    'vue/attributes-order': 'off',
    // 强制每个组件在其自己的文件夹中
    'vue/one-component-per-file': 'off',
    // 要求或禁止在标签的右括号之前使用换行符
    'vue/html-closing-bracket-newline': 'off',
    // 强制每行属性的最大数量
    'vue/max-attributes-per-line': 'off',
    // 在多行元素的内容之前和之后需要换行
    'vue/multiline-html-element-content-newline': 'off',
    // 在单行元素的内容之前和之后需要换行
    'vue/singleline-html-element-content-newline': 'off',
    // 在模板中的自定义组件上强制属性命名样式
    'vue/attribute-hyphenation': 'off',
    // 需要默认的道具值
    'vue/require-default-prop': 'off',
    // 防止setup中变量在template中使用了被标记为未使用
    'vue/script-setup-uses-vars': 'off',
    // 对自定义事件名称强制指定大小写
    'vue/custom-event-name-casing': 'off',
    // 执行自闭的风格
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
});
