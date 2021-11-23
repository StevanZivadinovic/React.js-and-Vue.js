import { createRouter, createWebHistory } from 'vue-router'
import Welcome from './../views/Welcome.vue';
import Chatroom from './../views/Chatroom.vue';
import { projectAuth } from '../firebase/config';

const requireAuth = (to, from, next )=>{
  if(!projectAuth.currentUser){
    next({name:'Welcome'})
  }else{
    next()
  }
}

const dontAllowLogedUserToSeeWelcomeScreen=(to,from,next)=>{
  if(projectAuth.currentUser){
    next({name:'Chatroom'})
  }else{
    next()
  }
}

const routes = [

  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter:dontAllowLogedUserToSeeWelcomeScreen
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter:requireAuth
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