// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './elemeui'
import App from './App'
import router from './router'

import '../bower_components/xsl.reset-css/reset.css'
import '../bower_components/animate.css/animate.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
