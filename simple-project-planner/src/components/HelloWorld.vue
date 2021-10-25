<template>
  <div class="todoList">
    <h1>Izabri parametre pretrage:</h1>
    <div class="parametri" style="display: flex">
      <div>
        <p>Bogoslovije:</p>
        <select @change='getSeminary1($event)'>
          <option
            v-for="seminary in getSeminary"
            :key="seminary.name"
            :value="seminary.name"
            
          >
            {{ seminary.name }}
          </option>
        </select>
      </div>
      <div>
        <p>Eparhije:</p>
        <select  @change='getDiocese1($event)'>
          <option
            v-for="diocese in getDiocese"
            :key="diocese.name"
            :value="diocese.nameOfDiocese"
           
          >
            {{ diocese.nameOfDiocese }}
          </option>
        </select>
      </div>

      <div>
        <p>Ime i prezime:</p>
        <input type="text" name="imeIprezime" id="imeIprezime" @change='getNameOfStudent($event)'/>
      </div>
    </div>
    <div class="parametri" style="display: flex"></div>

    <div class="parametri" style="display: flex">
      <div>
        <p>Razred:</p>
        <select @change='getClass($event)'>
          <option value='1'>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <p>Status:</p>
        <select @change='getStatus($event)'>
          <option value="redovan">redovan</option>
          <option value="neredovan">neredovan</option>
        </select>
      </div>

      <div>
        <p>Skolska godina:</p>
        <select ref="skGodina" @change='getSkGodina($event)'>
          <option value="2013/2014">2013/2014</option>
          <option value="2014/2015">2014/2015</option>
          <option value="2015/2016">2015/2016</option>
          <option value="2016/2017">2016/2017</option>
          <option value="2017/2018">2017/2018</option>
        </select>
      </div>
    </div>

    <!-- 
      </div> -->
    <!-- <p>seminary</p>
    <ul class="lista" ref="listItemProducts">
      <li v-for="seminary in getSeminary" :key="seminary.name" @click="ukloni">
        {{ seminary.name }}
      </li>
    </ul>-->
    <!-- <button @mouseover="metod">Filter</button>  -->
    <button @click="getData($event)">Get data in console</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      noviNiz: [],
      filter:{ 
        id:'',
        diocese:'Niska',
        seminary:'Karlovacka',
        nameOfStudent:'',
        schoolYear:'2013/2014',
        class:'1',
        status:'redovan'

      }
    };
  },
  props: ["podaci"],
  // methods: {
  //   ukloni(e) {
  //     e.target.addEventListener("click", (e) => {
  //       console.log(e.target);
  //       e.target.remove();
  //     });
  //   },
   
  // },

  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(["getDiocese", "getSeminary"]),
    // saleProducts(){
    //   return this.$store.getters.saleProducts
    // }
  },
  //https://www.youtube.com/watch?v=SaBnaGu7cP8&ab_channel=TheNetNinja
  methods: {
    getSkGodina(e){
         this.filter.schoolYear = e.target.value;   
    },
     getDiocese1(e){
         this.filter.diocese = e.target.value;   
    },
    getSeminary1(e){
       this.filter.seminary = e.target.value;   
    },
    getNameOfStudent(e){
      this.filter.nameOfStudent = e.target.value;
    },
    getClass(e){
      this.filter.class = e.target.value;
    },
    getStatus(e){
      this.filter.status = e.target.value
    },
     getData(e){
       console.log(this.filter.schoolYear)
     
     console.log(this.filter)
    },
    metod() {
      console.log(this.$store.state, this.$store.getters);
    },
    // reducePrice(payload){//kad se ubaci mapActions ne treba nista od ovog zakomentarisanog
    // console.log(this.$store)
    //   return this.$store.commit('reducePrice')//kad nemas actions ovako pozivas mutaciju
    //   return this.$store.dispatch('reducePrice1', payload)//ovako pozivas akciju, isto se zove kao mutacija, a preko akcije pozvana je mutacija

    // }
    //ne treba bubel da se koristi da bi radio spread operator
    ...mapActions([
      // 'reducePrice1'
    ]),
  },
};
</script>

<style>
</style>