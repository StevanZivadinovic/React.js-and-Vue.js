<template>
   <form @submit.prevent="updateProject">
    <label for="">TITLE</label>
    <input type="text" name="" id="" v-model="title" required />
    <label for="">DETAILS</label>
    <textarea name="" id="" cols="30" rows="10" v-model="details" required></textarea>
    <button>Update project</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
props:['id'],
data(){
    return{
        uri:'http://localhost:8000/project/',
        title:'',
        details:''
    }
},

mounted(){
    axios(this.uri + this.id)
    .then(data=>{
        console.log(data.data)
        this.title = data.data.title
        this.details = data.data.details
        
    })
   
},
methods:{
    updateProject(){
        axios.patch(this.uri+this.id,{title:this.title, details:this.details})
        .then(()=>{
            this.$router.push('/')
        })
    }
}
}
</script>

<style>

</style>