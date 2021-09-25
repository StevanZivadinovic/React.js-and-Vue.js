<template>
  <div class="blok" v-if="showBlock">
    <div class="blok__clickDiv" @click="endTimer">Click me</div>
    <div class="blok__delay">{{ delay.toFixed(2) }}ms</div>
  </div>
</template>

<script>
export default {
  props: ["delay"],
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reaction += 10;
      }, 10);
    },
    endTimer() {
      clearInterval(this.timer);
      console.log(this.reaction);
      this.$emit("end", this.reaction); //sad smo u root komponenti kreirali event pod nazivom end, i vrednost promenjive reaction
    },
  },
  data() {
    return {
      showBlock: false,
      timer: null,
      reaction: 0,
    };
  },
  mounted() {
    console.log("haj haj");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  beforeMount() {
    console.log("prvi haj");
  },
  updated() {
    console.log("updatovano");
  },
  unmounted() {
    console.log("unmounted"); //ako Block componenta bude izbrisana iz DOM-a u nekom momentu onda ce se aktivirati ova funkcija
  },
};
</script>

<style scoped>
.blok__clickDiv {
  color: rgb(240, 171, 42);
  width: 40%;
  height: 20vh;
  background-color: palegreen;
  margin: 2rem auto;
  border-radius: 1rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.blok__delay {
  color: orange;
  width: 40%;
  font-size: 2rem;
  margin: 0 auto;
  text-align: center;
}
</style>