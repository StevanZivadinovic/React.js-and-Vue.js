<template>
  <div class="project">
    <div class="actions">
      <h3 @click="Show">{{ podatak.title }}</h3>
    </div>
    <div v-if="show" class="details" ref="details">
      <p>{{ podatak.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["podatak"],
  data(){
      return{
          show:false
      }
  },
  methods:{
      Show(){
          this.show = !this.show
      }
  }
};
</script>

<style>
</style>