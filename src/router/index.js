import Vue from 'vue'
import Router from 'vue-router'

// 组件
import home from '@/components/home'
import about from '@/components/about'
import orders from '../components/orders'

Vue.use(Router) // 使用Router

export default new Router({
  routes: [
    {path: '/', name: 'home', component: home},
    {path: '/about', name: 'about', component: about},
    {path: '/orders', name: 'orders', component: orders}
  ]
})
