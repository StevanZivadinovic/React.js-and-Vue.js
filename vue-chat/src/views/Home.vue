
<template>
  <div class="welcomeContainer">
    <div class="card">
      <div class="">
        <h2 class="text">Welcome</h2>
        <form @submit.prevent="enterChat()"><!--naziv funkcije mora da krene malim slovom enterChat-->
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name" />
          <button class="btn">Enter Chat</button>
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
    };
  },
  methods:{
      enterChat:function(){
          console.log(this.name)
      }
  }
};
</script>

<style>
</style>