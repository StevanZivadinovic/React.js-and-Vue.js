
<template>
  <p>HOME</p>
  <ul>
    <li v-for="podatak in podaci" :key="podatak.id">
      <SingleProject :podatak="podatak"/>
    </li>
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
};
</script>

<style>
</style>