<template>
  <div>
    <div class="flex justify-center">
      <img class="flex justify-center" alt="Vue logo" src="./assets/logo.png" />
    </div>
  
    <button  class="clickBtn flex justify-center" @click="start" :disabled="isPlayed">play</button>
    <Blok v-if="isPlayed" :delay='isDelay' @end="endGame"/>
    <Result v-if="showResult" :score='score'/>
  
   
  </div>
</template>

<script>
import Blok from "./components/Blok1.vue";
import Result from "./components/Result1.vue";

export default {
  name: "App",
  components: {
    Blok,
    Result,
  },
  data() {
    return {
      isPlayed: false,
      isDelay: null,
      score: null,
      showResult: false,
    };
  },
  methods: {
    start() {
      this.isPlayed = true;
      this.isDelay = 2000 + Math.random() * 5000;
      console.log(this.isDelay);
      this.showResult = false;
    },
    endGame(reaction) {
      //ovoj funkciji je preko $emit-a dodljena i promeljiva reaction iz Blok componente, pa sada mozemo ovde da je koristimo
      console.log("zavrsena igra");
      this.isPlayed = false;
      this.score = reaction;
      this.showResult = true;
    },
  },
};
</script>
<style>
.clickBtn{
  background-color: aquamarine;
  padding: .5rem 1rem;
  border-radius:.3rem;
  width: 5rem;
  margin:0 auto;
  text-align: center;
 


}

</style>

<!-- Postupak instalacije tailwind-a
1) npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
2) pravis u src/assets tailwind.css file, moze i drugacije da se zove i ubacujes u njega ono sto treba (@teilwind base; i tako dalje) 
3) npx tailwindcss-cli@latest init -p (moze i bez -p ja mislim): ovo bi trebalo da napravi postcss.config.js i tailwind.config.js
4) u main.js importujes tailwind.css
U tail-->
