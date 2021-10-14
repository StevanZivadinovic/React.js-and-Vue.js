<template>
  <div class="todoList">
    <ul class="lista" ref="listItem">
      <li v-for="podatak in podaci" :key="podatak.id" @click="ukloni">
        {{ podatak }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noviNiz: [],
    };
  },
  props: ["podaci"],
  methods: {
    ukloni(e) {
     e.target.addEventListener('click',e=>{
         console.log(e.target)
         e.target.remove()
     })
    },
  },
};
</script>

<style>
</style>