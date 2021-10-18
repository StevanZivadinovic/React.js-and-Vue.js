<template>
  <div class="todoList">
    <ul class="lista" ref="listItem">
      <li v-for="podatak in podaci" :key="podatak.id" @click="ukloni">
        {{ podatak }}
      </li>
    </ul>

     <ul class="lista" ref="listItemProducts">
      <li v-for="product in saleProducts" :key="product.name" @click="ukloni">
        {{ product.name }}: ${{product.price}}
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

  computed:{
    products(){
      return this.$store.state.products
    },
    saleProducts(){
      return this.$store.getters.saleProducts
    }
  }
};
</script>

<style>
</style>