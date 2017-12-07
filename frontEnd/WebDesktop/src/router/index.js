import Vue from 'vue'
import Router from 'vue-router'
import Desktop from '@/components/Desktop'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Hello',
      component: Desktop
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
