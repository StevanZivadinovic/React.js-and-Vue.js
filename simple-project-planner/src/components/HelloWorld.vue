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
    <button @click='reducePrice1(4)'>reducePrice</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
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
   ...mapGetters([
     'saleProducts'
   ])
    // saleProducts(){
    //   return this.$store.getters.saleProducts
    // }
  }
  ,
  //https://www.youtube.com/watch?v=SaBnaGu7cP8&ab_channel=TheNetNinja
  methods:{
    // reducePrice(payload){//kad se ubaci mapActions ne treba nista od ovog zakomentarisanog
    //   // return this.$store.commit('reducePrice')//kad nemas actions ovako pozivas mutaciju
    //   // return this.$store.dispatch('reducePrice1', payload)//ovako pozivas akciju, isto se zove kao mutacija, a preko akcije pozvana je mutacija
   
    // }
    //ne treba bubel da se koristi da bi radio spread operator
     ...mapActions([
      'reducePrice1'
    ])
  }
};
</script>

<style>
</style>