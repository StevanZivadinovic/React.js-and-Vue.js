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
  <button class="p-4 bg-green-400 text-center block mx-auto w-64 rounded" @click="showWindowUP">Go to the bottom of chat!</button>
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
    
      
    };
  },
  
  components: {
    AddMessage,
  },
  methods:{

    showWindowUP(){
      console.log(this.$refs.chatWindow);
            this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight

    }
  }
  ,
 
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