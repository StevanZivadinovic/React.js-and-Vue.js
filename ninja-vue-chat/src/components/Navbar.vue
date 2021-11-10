<template>
    <nav>

  <div class="navbar container" v-if="user">
      <div>
      <p>Hey there {{user.displayName}}</p>
      <p class="email">Curently logged in as... email</p>
      </div>
      <button class="" @click="logout">Logout</button>
  </div>
    </nav>
</template>

<script>
import {projectAuth} from './../firebase/config'

projectAuth.onAuthStateChanged(user1=>{
    let user = user1
    console.log(user)
    });

export default {
    data(){
        return{
            user:'s'
        }
    },
methods:{ 

    

    logout(){
        projectAuth.signOut()
        .then(()=>{
            console.log('user is logedout')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
}
</script>

<style>

</style>