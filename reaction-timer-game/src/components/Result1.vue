<template>
  <div class="result">
      <h2>Your result is: {{score}} ms</h2>
      <p>{{rank}}</p>
  </div>
</template>

<script>
export default {
    props:['score'],
    data(){ 
        return{
            rank:null,
            nebitno:null
        }
    },
    mounted(){
        if(this.score<200){
            this.rank='Ninja Fingers'
        }else if(this.score<400){
         this.rank='Rapid reflexes' 
        }else{
        this.rank='Snail pace..'
        }
    }
}
</script>

<style scoped>
h2{
    font-size: 2rem;
    margin: 1rem 0 0 0;
}
p{
        font-size: 1.5rem;
}
</style>