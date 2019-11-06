/*
 * @Author: xiaolong.qiu
 * @Date: 2019-11-06 10:27:32
 * @LastEditTime: 2019-11-06 19:44:13
 */
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
