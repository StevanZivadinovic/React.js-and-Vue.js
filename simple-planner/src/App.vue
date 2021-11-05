
<template>
<Navbar/>
  <router-view/>
  <!-- <button @click="pushButton">push</button> -->
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
    components:{
        Navbar:Navbar
    },
    methods:{
        pushButton(){
            this.$router.push('/about')
        }
    }
}
</script>

<style>

</style>
