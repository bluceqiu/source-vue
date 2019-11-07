/*
 * @Author: xiaolong.qiu
 * @Date: 2019-11-06 10:27:32
 * @LastEditTime: 2019-11-07 11:16:47
 */
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter);

const abc = { template: '<div>abc</div>' }
const def = { template: '<div>def</div>' }

const routes = [
  { path: '/abc', component: abc },
  { path: '/def', component: def }
]
const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
