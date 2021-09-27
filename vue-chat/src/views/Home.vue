
<template>
  <div class="p-4 border-4 w-6/12 flex flex-col h-80 mx-auto my-0 justify-center">
    <div class="card flex justify-center h-80 w-full">
      <div class="italic font-bold w-9/12 flex flex-col justify-center">
        <h2 class="text pb-4 text-4xl text-center text-green-600">Welcome</h2>
        <form @submit.prevent="enterChat()" class="flex flex-col"><!--naziv funkcije mora da krene malim slovom enterChat-->
          <label class="text-gray-300 text-center" for="name">Enter your name:</label>
          <input class="border-b-4 focus:outline-none focus:border-green-500" type="text" name="name" v-model="name"  />
          <p v-if="feedback" class="text-red-500 text-center">{{feedback}}</p>
          <button class="italic font-bold bg-green-600 p-2 rounded text-white">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback:null
    };
  },
  methods:{
      enterChat:function(){
          if(this.name){
            alert('Hay '+ this.name);
            this.$router.push({name:'Chat', params:{mojeIme:this.name}}) //$router, ovim pristupamo ruteru i preko push mu kazemo do koje
            //komponente da nas dovede, a params sluzi da prosledimo props do te iste komponente
          }else{
            this.feedback = 'You must enter name to join'
          }
      }
  }
};
</script>

<style>
</style>