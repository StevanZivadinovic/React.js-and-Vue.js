import { createRouter, createWebHistory } from 'vue-router'
import Welcome from './../views/Welcome.vue';
import Chatroom from './../views/Chatroom.vue';



const routes = [

  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom
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