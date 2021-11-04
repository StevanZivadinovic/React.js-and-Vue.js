//router 4

import { createRouter, createWebHistory } from 'vue-router'
import About from './../views/About.vue';
import Home from './../views/Home.vue';
import addNewItem from './../views/addNewItem.vue'


const routes = [

  {
    path: '/about',
    name: 'about',
    component: About
  }
  ,
  {
   
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path:'/home-app',
    redirect:'/moji'
  },
  {
    path:'/add',
    name:'addComponent',
    component:addNewItem
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