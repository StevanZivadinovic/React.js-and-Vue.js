<template>
  <form action="">

      <textarea @keypress.enter.prevent="handleSubmit"  name="" id="" cols="30" rows="10" placeholder="type message here..." v-model="message"></textarea>
  </form>
</template>

<script>
import {projectAuth, timestamp} from './../firebase/config.js'
export default {
data(){
  return{
    message:'neki'
        }
},
methods:{
  handleSubmit(){
    const chat = {
      name:projectAuth.currentUser.displayName,
      message:this.message,
      createdAt:timestamp()
    }
    console.log(chat);
  }
}
}
</script>

<style>

</style>