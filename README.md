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

- 整个项目都可能使用到的公共组件放到@/src/components中，需要注册到全局的组件放到@/src/components/global中

- 静态资源放到@/src/assets中，会打包编译（相对路径引入），第三方库等内容放到@/static中，打包不会重新编译（绝对路径引入）

- 每个一级菜单在@/views下创建一个文件夹，一级菜单下用components文件夹存放当前公用组件，二级菜单在此内部再创建文件夹

- 为了实现缓存，页面内部使用keep-alive+component的形式书写，跳转使用replace+query参数，并更改state状态

- 原则上，bus容器内的组件互相传值使用路由传参，除了state

- 目录结构参考views/test 文件夹下  其中二级路由子文件夹只放component的is组件
