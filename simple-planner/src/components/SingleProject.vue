<template>
  <div class="project" :style="podatak.complete ? 'border-left:.4rem solid greenyellow':''">
    <div class="data">
      <h3 @click="Show">{{ podatak.title }}</h3>
      <div v-if="show" class="details" ref="details">
        <p>{{ podatak.details }}</p>
      </div>
    </div>
    <div class="actions">
      <i class="fas fa-pen"></i>
      <i @click="deleteItem" class="fas fa-trash"></i>
      <i @click="toggleComplete" class="fas fa-check" ref="tick" :class="podatak.complete ? 'cekirano' : ''"></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ["podatak"],
  data() {
    return {
      show: false,
      uri: "http://localhost:8000/project/"
    };
  },
  methods: {
    Show() {
      this.show = !this.show;
    },
    deleteItem() {
        console.log(`${this.uri}`+`${this.podatak.id}`)
        axios.delete(
           `${this.uri}`+`${this.podatak.id}`
            )
            .then(()=>{
                this.$emit('delete', this.podatak.id)//drugi parametar je podatak koji prosledjujemo
            })
    },
    toggleComplete(){
       

        //ovako nekako ide sa fetch, ali ovde ne radi, ali otprilike ovako
        // fetch(`${this.uri}`+`${this.podatak.id}`,{
        //     method:'PATCH',
        //     headers:{'Content-Type':'application/json'},
        //     body:JSON.stringify({complete:!this.podatak.complete})
        // })

        axios.patch(
            `${this.uri}`+`${this.podatak.id}`,{complete: !this.podatak.complete}
            ).then(data=>{
                this.$emit('patchComplete', this.podatak.id)
            })
    }
  },
};
</script>

<style>
</style>