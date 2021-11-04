
<template>
 

  <ul>
    <li v-for="podatak in podaci" :key="podatak.id">
      <SingleProject :podatak="podatak" @delete="deleteItemHandler" @patchComplete="patchComplete"/>
    </li>
  <button @click="goToAddForm">Add new!</button>
  </ul>
  

</template>

<script>
import axios from "axios";
import SingleProject from './../components/SingleProject.vue'
export default {
  components:{
    SingleProject:SingleProject
  },
  data() {
    return {
      podaci: [],
    };
  },
  mounted() {
    axios.get("http://localhost:8000/project").then((data) => {
      console.log(data.data);
      this.podaci = data.data;
    });
  },
  methods:{
    deleteItemHandler(id){
      this.podaci = this.podaci.filter(podatak=>{
        return podatak.id!=id
      })
     
    }
     ,
      patchComplete(id){
        const p = this.podaci.find(podatak=>{
          console.log(podatak.id,id)
        return podatak.id===id
      })
      p.complete = !p.complete;
      },

      goToAddForm(){
        this.$router.push('/add')
      }
  }
};
</script>

<style>
</style>