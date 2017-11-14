// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 全局公共组件
import './components/block/elemeui'
import './components/block/common'

import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
