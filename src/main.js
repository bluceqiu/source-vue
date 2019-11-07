/*
 * @Author: xiaolong.qiu
 * @Date: 2019-11-06 10:27:32
 * @LastEditTime: 2019-11-07 19:24:20
 */
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter);

const Abc = { template: '<div style="color:red;">abc page content</div>' }
const Def = { template: '<div style="color:blue;">def page content</div>' }
import User from './components/User.vue'

const routes = [
  { path: '/abc', component: Abc },
  { path: '/def', component: Def },
  { path: '/user/:color', component: User }// $route.params
]
const router = new VueRouter({
  routes
});
console.log(Abc);
new Vue({
  store,
  router,
  render: h => h(App),
  // template: '<App/>', // 运行时构建不支持template选项
  // components: { App }
}).$mount('#app')


// 独立构建包括编译和支持 template 选项。 它也依赖于浏览器的接口的存在，所以你不能使用它来为服务器端渲染。
// 运行时构建 不包括模板编译，不支持 template 选项。
// 运行时构建，可以用 render 选项，但它只在单文件组件中起作用，因为单文件组件的模板是在构建时预编译到 render 函数中，运行时构建只有独立构建大小的 30%，只有 16Kb min+gzip 大小。