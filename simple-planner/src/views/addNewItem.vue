<template>
  <form action="" @submit.prevent="addNew">
    <label for="">TITLE</label>
    <input type="text" name="" id="" v-model="title" required />
    <label for="">DETAILS</label>
    <textarea name="" id="" cols="30" rows="10" v-model="details" required></textarea>
    <button >Add project</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
data(){
    return{
        title:'',
        details:''
    }
},
methods:{
    addNew(){
        const project = {
        title:this.title,
        details:this.details
        }

    axios.post('http://localhost:8000/project',project)
    .then(()=>{
        this.$router.push('/')
    })

    }
}
};
</script>

<style>
</style>