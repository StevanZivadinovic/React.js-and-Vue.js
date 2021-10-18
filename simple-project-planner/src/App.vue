<template>
  <div>
    <form action="" @submit.prevent='submitObligation'>
      <input type="text" v-model="todoText" ref="todoInput" @keyup="unosPrograma">
    
    </form>
    
  </div>
  <HelloWord :podaci = 'listOdData' ></HelloWord>
</template>

<script>
import HelloWord from './components/HelloWorld.vue'
export default {
   components: {
    'HelloWord': HelloWord
  },
data(){
  return{
    listOdData:[],
    todoText:'html'
    
  }
},
methods:{
  unosPrograma(e){
    if(e.key ===','){
      console.log(this.todoText)
      
      this.listOdData.push(this.todoText.slice(0,-1));
      this.todoText = '';
    }
    console.log(this.listOdData)
  }
}
}
</script>

<style>

</style>