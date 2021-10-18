import { createApp } from 'vue'
import App from './App.vue'
import  store  from './store/store'

createApp(App).use(store).mount('#app');
// createApp(App).mount(store)
