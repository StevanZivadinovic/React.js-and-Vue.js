<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayName">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Sign up</button>
  </form>
</template>

<script>
export default {
data(){
    return{
        displayName:'',
        email:'',
        password:''
    }
},
methods:{
    handleSubmit(){
        console.log(this.displayName, this.email, this.password)
    }
}
}
</script>

<style>

</style>