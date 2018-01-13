// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

// 第三方库
import 'babel-polyfill' // 支持ES6新API
import VueAwesomeSwiper from 'vue-awesome-swiper'   // vue-awesome-swiper
import 'swiper/dist/css/swiper.css'
import MuseUI from 'muse-ui' // muse-ui
import 'muse-ui/dist/muse-ui.css'

// 当前环境配置
Vue.config.productionTip = false

// 使用第三方库
Vue.use(VueAwesomeSwiper) // Vvue-awesome-swiper
Vue.use(MuseUI) // muse-ui

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
