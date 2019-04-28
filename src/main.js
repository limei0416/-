// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
// import store from './store/index.js'
// import "bootstrap/dist/css/bootstrap.css"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
//全局注册axios;
import axios from 'axios'
Vue.prototype.axios=axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
