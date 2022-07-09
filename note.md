# Vue3 项目笔记

## 规范

1. eslint

2. prettier  [文档](https://www.prettier.cn/docs/index.html)

3. 提交规范： 约定式提交规范

[约定式提交规范文档-阅读规范 ](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

<类型>[可选 范围]: <描述>

1. 全局安装 commitizen

```
npm i -g commitizen@4.2.4
```

2. 项目安装插件-D： cz-customizable 

```
npm i cz-customizable --save-dev
```

然后在 `package.json` 中配置：

```
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

3. 项目根目录创建 `.cz-config.js` 自定义提示文件

```
module.exports = {
  types: [
    { value: 'feat', name: 'feat:  新功能'},
    { value: 'fix', name: 'fix:  bugfix'}
  ]
}
```
