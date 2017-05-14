# 项目结构及简介
vue-element-layui-cli

## 开始

```bash
$ npm install                   # 安装依赖
$ npm start                     # 运行
```

## 项目目录

```
.
├── make                     # 启动脚本
├── build                    # 所有打包配置项
│   └── webpack              # webpack的指定环境配置文件
├── config                   # 项目配置文件
├── dist                     # 打包后的文件
│── static                   # 静态依赖文件（layUI）
├── src                      # 程序源文件
│   ├── api                  # 定义的API请求接口
│   ├── main.js              # 程序启动和渲染
│   ├── assets               # 主题设置或者图片等
│   ├── common               # 抽出的公有方法
│   ├── components           # 布局UI组件
│   │   ├── XBDate.js        # 自定义的组件逻辑代码
│   │   └── XBDate.html      # 自定义的组件模版
│   ├── mock                 # mock 模拟接口请求数据
│   ├── views                # 全局容器组件（页面文件）
│   │   ├── order.js         # 自定义的组件逻辑代码
│   │   └── order.html       # 自定义的组件模版
│   ├── vuex                 # vuex 数据管理
└── tests                    # 单元测试（暂无）
└── routes                   # 路由管理
```

## 同时支持Vue 官方提供的element UI 和 layUI
首次打开的展示方式是用element UI做的布局，通过页面的红色按钮 “用layUI试试”，可以看到用layUI做的布局

## 模版和业务逻辑，提高了可扩展性和可维护性
1. components是UI组件，模版文件通过外部文件引入
2. views是容器组件，模版文件通过外部文件引入

## 样式
采用scss模式，样式文件可以通过外部文件引入，例如：

``` html
<style lang='scss' src='./xxx'>
</style>

//或者
<style lang='scss' src='./xxx'>
@import "./xxx";
</style>
```

## 服务端

这个项目的服务端使用mock.js 模拟接口数据。mock/data/order.js 可以看列表的模拟数据格式。

## 打包
采用webpack 打包构建
