import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {projectAuth} from './firebase/config'


let app;
projectAuth.onAuthStateChanged(()=>{
    if(!app){
        app=createApp(App).use(router).mount('#app')
    }
})

//u ovoj aplikaciji koriscena biblioteka date-fns za formatiranje datuma: https://date-fns.org/



