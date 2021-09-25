<template>
  <div>
    <Header />
     <div></div>
    <div class="container mx-auto">
      <router-view />
    </div>
  </div>  
</template>

<script>
import Header from "@/components/Header.vue";


export default {
  components: {
    Header
  },
};
</script>

