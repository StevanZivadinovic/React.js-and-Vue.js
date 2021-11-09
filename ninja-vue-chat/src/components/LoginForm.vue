<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Log in</button>
  </form>
</template>

<script>
export default {
data(){
    return{
        
        email:'',
        password:''
    }
},
methods:{
    handleSubmit(){
        console.log(this.email, this.password)
    }
}
}
</script>

<style>

</style>