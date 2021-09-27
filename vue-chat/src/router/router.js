import { createWebHistory, createRouter } from 'vue-router';
import Home from './../views/Home.vue';
import Chat from './../components/Chat.vue'
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/chat',
		name: 'Chat',
		component: Chat,
		props:true,
		beforeEnter(to, from, next){//proverava da li je uneseno ime, ako nije ne dopusta da se rucno pristupi http://localhost:3000/chat
			if(to.params.mojeIme){
				console.log(next)
				next()
			}else{
				next({ name:'Home' })
			}
		}
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;