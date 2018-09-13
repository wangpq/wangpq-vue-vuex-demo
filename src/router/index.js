import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Favorites from '@/views/Favorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]
})
