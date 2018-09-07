# vue-leasing

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> tips

- 为了实现缓存，路由的name要和组件中的name一致（本身就是强耦合的），组件内部的列表通常也需要缓存，所以组件也需要命名name,特别注意，整个项目中name不能重名，否则会堆栈溢出

- 使用了缓存的列表使用activated来请求数据

