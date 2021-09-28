<template>
  <!-- <div class="flex flex-col justify-center pt-4"> -->
  <form class="flex flex-col justify-center pt-4" @submit.prevent="addMessage">
    <label class="text-center text-green-600 text-xl"
      >Write message.. {{ name }}</label
    >
    <input
      class="
        w-3/4
        rounded
        mx-auto
        border-b-4
        focus:outline-none
        focus:border-green-500
        mb-2
      "
      type="text"
      v-model="message"
    />
    <p class="text-center text-red-600 text-base">{{feedback}}</p>
  </form>
  <!-- </div> -->
</template>
<script>
import {db} from './../firebaseConfig.js'
export default {
    props:['name'],

    data(){
        return{

            message:null,
            timestamp:Date.now(),
            feedback:null

        }
    },
    methods:{
    addMessage:function(){
        if(this.message){

            console.log(this.message, this.timestamp, this.name);
          db.collection('messages').add({
               mess:this.message
           })
           this.message = null
           this.feedback = null
        }else{
            this.feedback = 'You must enter message to send one'
        }
    }
}
}
</script>

<style>
</style>