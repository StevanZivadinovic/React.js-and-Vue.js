<template>
  <div>
  
    <div>Chat {{ mojeIme }}</div>
    <div
      class="
        h-3/4
        border-4
        w-6/12
        flex flex-col
        h-80
        mx-auto
        my-0
        justify-center
        bg-green-100
      "
    >
      <h2 class="text-center text-4xl text-green-600 pt-10">Ninja chat</h2>

      <div class="card flex h-80 w-full lista">
        <ul class="w-full px-10 py-10 py-4 mt-4 overflow-y-auto" ref="chatWindow">
          <li
            v-for="message in messages"
            :key="message.id"
            class="flex flex-col px-10 py-10 mb-2 bg-green-600 w-6/12 rounded"
            
          >
            <div class="flex">
              <span class="px-2 text-xl text-white underline">{{ message.name }}</span>
              <span class="px-2 text-2xl text-white">{{ message.mess }}</span>
            </div>
            <span class="">{{ message.timestamp
                 }}</span>
          </li>
        </ul>
      </div>
      <AddMessage :name="mojeIme"/>
    </div>
  </div>
  <button class="p-4 bg-green-400 text-center block mx-auto w-64 rounded" @click="showWindowUP" @mouseover="changeSetter">Go to the bottom of chat!: {{fullName?fullName:fullName1}}</button>

</template>

<script>
import AddMessage from "./AddMessage.vue";
import db from "./../firebaseConfig";
import moment from 'moment'
export default {
  name: "Chat",
  props: ["mojeIme"],
  data() {
    return {
      messages: [],
      id:'ok',
     author: {
        name: 'John Doe',
        books: ['Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery']
      },
      firstName:null,
      lastName:null,
      fullName1:'Pera peric'
     
    
      
    
    }
  },
  
  components: {
    AddMessage,
  },
  methods:{
     even(numbers) {
    return numbers.filter(number => number % 2 === 0)
  },

    showWindowUP(){
      console.log(this.$refs.chatWindow);
            this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight

    },
    changeSetter(){
      this.fullName = 'john doe'
      // console.log(this.name, 'haj')
    }
  },
 computed: {
  fullName: {//ovde je zapravo definisana promenljiva fullName
    // getter
   get(){
     console.log(this.firstName)
     return this.firstName +' '+this.lastName;
   },
    
    // setter
    set(newValue) {
      const names = newValue.split(' ')
    // this.name = newValue
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
},
  created() {
    
    //  document.querySelector(".lista").scrollIntoView()
        
    
    let ref = db.collection("messages").orderBy('timestamp')

    ref.onSnapshot((snapshot) => {
      console.log(snapshot);
      snapshot.docChanges().forEach((element) => {
        if (element.type == "added") {
          element.doc.data();
        //   console.log(element.doc.data());
          this.messages.push({
            id: element.doc.id,
            name: element.doc.data().name,
            mess: element.doc.data().mess,
            timestamp: moment(element.doc.data().timestamp).format('lll'),
          });
        }
      });
    });
  }
};
</script>

<style>
/* .aa{
    height: 60%;
} */
</style>