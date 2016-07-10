# ExamStack移动端Web版本

> 为ExamStack提供简单的移动端Web界面，基于`vue.js`构建，需要配合后端API服务器使用，后端API服务器由项目`examstack-api`提供

## 技术说明

* vue.js
* webpack
* Generate from `vue-cli` [template](https://github.com/vuejs-templates/webpack)
* [Docs for template](http://vuejs-templates.github.io/webpack/index.html)
* [Docs for vue-loader](http://vue-loader.vuejs.org/en/index.html)

## 代码规范

* Soft tab，用两个空格代替tab，不得使用Hard tab
* 缩进单位为两个空格
* 任何代码中不得随意放空行，理论上不得有连续空行
* 更多规范，参考[这里](./docs/conventions.md)
* Use eslint to auto fix codes with issues can be auto fixed: `./node_modules/.bin/eslint --fix foo/**`

## [项目结构](./docs/structures.md)

## [参考](./docs/references.md)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](https://github.com/vuejs-templates/webpack#vue-webpack-boilerplate) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
