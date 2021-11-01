//router 4

import { createRouter, createWebHistory } from 'vue-router'
import About from './../views/About.vue';
import Home from './../views/Home.vue';
import Dashboard from './../views/dashboard.vue'

const routes = [

  {

    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {


   
    path: '/about',
    name: 'about',
    component: About
  }
  ,
  {
   
    path: '/home',
    name: 'home',
    component: Home
  },

  {
    path:'/home-app',
    redirect:'/moji'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
  // scrollBehavior (to, from, savedPosition) {
  //   return savedPosition || { top: 0 }
  // }
})

export default router