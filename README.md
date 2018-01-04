# 前言

这是针对初学vuex最基础的案例，完全将官网的案例通过模块化的方式进行1:1展示，并做相关功能的详细注释，相信通过这个基本可以了解vuex大致的使用

> A VueX project

# 项目运行
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```
# 说明

* 项目中未使用vue-loader，所有展现效果均在一张界面。
* 关于modules的简单说明：由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常 复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。
* 案例只做了 statte,getter,mutation,action，至于module这部分，会在后面专门做一个案例来说明。
* 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

# 作者推荐
* 本人更推荐学习完之后自己做些小项目练习，[vuex案例推荐地址](https://github.com/vuejs/vuex/tree/dev/examples)。
