<template>
    <nav>

  <div class="navbar container" v-if="user">
      <div>
      <p>Hey there {{user.displayName}}</p>
      <p class="email">Curently logged in as {{user.email}}</p>
      </div>
      <button class="" @click="logout">Logout</button>
    
  </div>
    </nav>
</template>

<script>
import {projectAuth} from './../firebase/config'
// import {useRouter} from 'vue-router'

import {ref} from 'vue';
const user = ref(projectAuth.currentUser)



    projectAuth.onAuthStateChanged(user1=>{//ovim na svaku promenu dohvatamo trenutnog korisnika, stavljamo ga u promenljivu 'user', preko
    //ovog ref gore, vrednost promenljive user stavljamo u projectAuth.currentUser. Na kraju, dole u data(), u promenljivu user, koja je
    //klasicna vue promenljiva, ne kao ova gore definisana, stavljamo projectAuth.currentUser u kojoj se nalaze podaci koje zelimo
        user.value = user1
        console.log(user1)
       
        
        });


export default {
    data(){
        return{
            user:projectAuth.currentUser
        }
    },
methods:{ 

    logout(){
        projectAuth.signOut()
        .then(()=>{
            console.log('user is logedout')
            this.user=projectAuth.currentUser
            this.$router.push({name:'Welcome'})
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    getData(){
        console.log(this.user)
    }
}


}

</script>

<style>

</style>