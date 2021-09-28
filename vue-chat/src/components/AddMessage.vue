<template>
  <!-- <div class="flex flex-col justify-center pt-4"> -->
      <form class="flex flex-col justify-center pt-4" @submit.prevent="addMessage" >

          <label class="text-center text-green-600 text-xl">Write message.. {{name}}</label>
          <input class="w-3/4 rounded mx-auto  border-b-4 focus:outline-none focus:border-green-500 mb-16" type="text" v-model="message">
      </form>
      <!-- </div> -->
</template>
<script>
import {db} from './../firebaseConfig.js'
export default {
    props:['name'],
    message:null,
    timestamp:new Date(),
    methods:{
    addMessage:function(){
        console.log(this.message, this.timestamp, this.name);
      db.collection('messages').add({
           mess:this.message
       })
    }
}
}
</script>

<style>

</style>