import { createRouter, createWebHistory } from 'vue-router'
import Welcome from './../views/Welcome.vue';


const routes = [

  {
    path: '/',
    name: 'Welcome',
    component: Welcome
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