
<template>
<p>pozz</p>
  <router-view/>
  <button @click="pushButton">push</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
    methods:{
        pushButton(){
            this.$router.push('/about')
        }
    }
}
</script>

<style>

</style>
