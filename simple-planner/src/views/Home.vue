
<template>
  <p>HOME</p>
  <ul>
    <li v-for="podatak in podaci" :key="podatak.id">{{ podatak.title }}</li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
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