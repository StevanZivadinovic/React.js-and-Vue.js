
<template>
  <div class="buttons">
    <button @click="getAll">All</button>
    <button @click="getCompleted">Completed</button>
    <button @click="getOngoing">Ongoing</button>
  </div>
  <ul>
    <li v-for="podatak in filteredProjects" :key="podatak.id">
      <SingleProject
        :podatak="podatak"
        @delete="deleteItemHandler"
        @patchComplete="patchComplete"
      />
    </li>
    <button @click="goToAddForm">Add new!</button>
  </ul>
</template>

<script>
import axios from "axios";
import SingleProject from "./../components/SingleProject.vue";
export default {
  components: {
    SingleProject: SingleProject,
  },
  data() {
    return {
      podaci: [],
      current:'all'
    };
  },
  mounted() {
    axios.get("http://localhost:8000/project").then((data) => {
      console.log(data.data);
      this.podaci = data.data;
    });
  },
  methods: {
    deleteItemHandler(id) {
      this.podaci = this.podaci.filter((podatak) => {
        return podatak.id != id;
      });
    },
    patchComplete(id) {
      const p = this.podaci.find((podatak) => {
        console.log(podatak.id, id);
        return podatak.id === id;
      });
      p.complete = !p.complete;
    },

    goToAddForm() {
      this.$router.push("/add");
    },
    getCompleted(){
      
      this.current = 'completed'
    },
    getAll(){
      this.current = 'all'
    },
    getOngoing(){
      this.current = 'ongoing'
    }
  },
    computed: {
      filteredProjects() {
        console.log(this.current)
        if(this.current ==='ongoing'){

         return this.podaci.filter((podatak) => {
            return !podatak.complete;
          });
        }

        if(this.current ==='completed'){

         return this.podaci.filter((podatak) => {
            return podatak.complete;
          });
        }
        return this.podaci
      },
    },
  
};
</script>

<style>
</style>