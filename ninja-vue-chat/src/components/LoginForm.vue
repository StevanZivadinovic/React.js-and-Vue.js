<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <p class="error">{{error}}</p>
      <button>Log in</button>
  </form>
</template>

<script>
import {projectAuth} from './../firebase/config'
export default {
data(){
    return{
        
        email:'',
        password:'',
        error:''
    }
},
methods:{
    handleSubmit(){
        console.log(this.email, this.password);
        projectAuth.signInWithEmailAndPassword(this.email, this.password)
        .then(data=>{
            this.$emit('login')
        })
        .catch(err=>{
            this.error = err.message.substring(9)
        })
    }
}
}
</script>

<style>

</style>