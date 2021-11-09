<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayName">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <p class="error">{{err}}</p>
      <button>Sign up</button>

  </form>
</template>

<script>
import {projectAuth} from './../firebase/config'
export default {
data(){
    return{
        displayName:'',
        email:'',
        password:'',
        err:''
    }
},
methods:{
    handleSubmit(){
        console.log(this.displayName, this.email, this.password)
        projectAuth.createUserWithEmailAndPassword(this.email, this.password)
        .then(data=>{
            projectAuth.currentUser.updateProfile({displayName:this.displayName});
            console.log(data)
            console.log(projectAuth.currentUser)
            // return data.user.updateProfile({displayName:this.displayName})
        })
        .catch(err=>{
            console.log(err)
            this.err =err.message.substring(9);
        })
    }
}
}
</script>

<style>

</style>