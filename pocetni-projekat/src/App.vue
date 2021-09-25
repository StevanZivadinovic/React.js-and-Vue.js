<template>
  <div>
    <!--Ne mora sve u jedan root element da bude, nije kao u react-u, ranije je i u vue-u bilo tako, sada ne mora, ali meni ovde eslint
    pravi frku zato sam ga ovako stavio, u principu radi ali pokazuje gresku pa me nervira-->
    <img alt="Vue logo" src="./assets/logo.png" />
    <teleport to='#modal' v-if='showOrHide'><!--umesto teleport samo stavi div ako hoces prethodnu varijantu, teleport renderuje ono sto je 
    unutar njega u divu koji je naznacen u to='#modal', #modal je div koji se nalazi u index.html-->
      <!-- <teleport to='.modal'> -->
      <Hello2 heder='pozdravni heder'  :drugiProps='drugaPoruka' trow='salePrim' @close='showDiv'>
        <template v-slot:linkovi><!--ovo linkovi je moje ime za ovaj slot, koji se poziva samo ako ga pozoves sa <slot name="linkovi"></slot>-->
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>

        </template>
        <div class="default-niSlot">
          <div>hello world</div>
        <div>hay everyone</div>
        </div>
        

      </Hello2>
      <!-- </teleport> -->
    </teleport>
    <h1 class="bg-red-500">hi</h1>
    <h1 class="bg-blue-500">hi</h1>
    <h1 class="white-blue-500">hi</h1>

    <h2>{{ message }}</h2>
    <input type="text" ref="refInput" />
    <button @click="handleInput()">click</button>
    <button @click.alt='showDiv()'>ShowDiv</button><!--kad kliknes moras da drzis i alt da bi radilo, ima jos dosta opcija, npr. ako 
    dodas .right radice samo na desni klik, ovo su event modifier-si-->
  </div>
</template>
<script>
import Hello2 from "./components/Hello2";
import './assets/tailwind.css'

export default {
  name: "App", //ovo ne mora, opciono je
  components: {
    Hello2,
  },
  data() {
    return {
      message: "Ovo je moj prvi Vue.js",
      drugaPoruka:'zdravo brate moj',
      showOrHide:false
    };
  },
  methods: {
    handleInput() {
      this.$refs.refInput.focus();
    },
    showDiv(){
      this.showOrHide = !this.showOrHide
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  align-self: center;
  text-align: center;
  margin: 0 auto;
  
}
</style>
