import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import CollectPage from '@/views/CollectPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/collect',
      name: 'CollectPage',
      component: CollectPage
    }
  ]
})
