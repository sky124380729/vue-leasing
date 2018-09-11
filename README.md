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

- 一级菜单没有子菜单的时候，一级菜单redirect到子菜单的index路径，index的title和一级菜单保持一致

- 为了实现缓存，路由的name要和组件中的name一致（本身就是强耦合的），组件内部的列表通常也需要缓存，所以组件也需要命名name,特别注意，整个项目中name不能重名，否则会堆栈溢出

- 使用了缓存的列表使用activated来请求数据

- 有些表单内容是动态的，在表单被清除的时候要清空绑定的值，这个时候使用v-clear指令

- 需要修改element框架样式在element-ui.scss中写，组件内部全局样式在custom.scss中写，index.scss用于初始化样式配置以及定义后台管理系统的布局（不要随意写入）

-
