<template>
  <div ref="chat" class="chat-window" v-if="newDataChangedTimeFormat">
    <div class="single" v-for="doc in newDataChangedTimeFormat" :key="doc.id">
      <span class="created-at">{{ doc.createdAt }}</span>
      <span class="name">{{ doc.name }}</span>
      <span class="message">{{ doc.message }}</span>
    </div>
  </div>
  <form action="">
    <textarea
      @keypress.enter.prevent="handleSubmit"
      name=""
      id=""
      cols="30"
      rows="1"
      placeholder="Type message here..."
      v-model="message"
    ></textarea>
  </form>
  <div class="err">{{ err }}</div>
</template>

<script>
import {
  projectFirestore,
  projectAuth,
  timestamp,
} from "./../firebase/config.js";
import { formatDistanceToNow, subDays } from 'date-fns';


export default {
  data() {
    return {
      message: "",
      err: "",
      documents: [],
    };
  },
  methods: {
    handleSubmit() {
      // console.log(this.documents, 'sss')
      const chat = {
        name: projectAuth.currentUser.displayName,
        message: this.message,
        createdAt: timestamp(),
      };
      // console.log(this.$refs.chat.scrollHeight)
    setTimeout(()=>{
      this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
    },100)
      

      this.documents=[]
      projectFirestore
        .collection("messages")
        .add(chat)
        .then((data) => {
          this.message = "";
          console.log(data);
        })
        .catch((err) => {
          this.err = err;
        });
    },
  }
  ,
  mounted(){
     
   projectFirestore.collection('messages').orderBy('createdAt')
     .onSnapshot(snap=>{
       this.documents=[]
       snap.docs.forEach(doc=>{
        doc.data().createdAt && this.documents.push({...doc.data(), id:doc.id})
       })

     })
       setTimeout(()=>{
      this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
    },1000)
 
  },
  computed:{
    newDataChangedTimeFormat(){
      if(this.documents){

        return this.documents.map(doc=>{
          let time =  formatDistanceToNow(doc.createdAt.toDate());
          return {...doc, createdAt:time}//ovom sintaksom samo menjas zeljeni properti doc-a, a to je ovde "createdAt"
         })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-window {
  background: #fafafa;
  padding: 3rem 2rem;
  overflow: hidden;
  height: 40%;
  max-height: 50rem;
  border:1px solid black;
  overflow: scroll;
  .single {
    margin: 1.8rem 0;
    .created-at {
      display: block;
      color: #999;
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
    }
    .name {
      font-weight: bold;
      margin-right: 0.6rem;
    }
  }
}
form {
  margin: 1rem;
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 0.6rem;
    padding: 1rem;
    border: none;
    border-bottom: 0.1rem solid rgba(black, 0.1);
    font-family: inherit;
    outline: none;
    font-size: 1.5rem;
    &:focus {
      border-bottom: 0.1rem solid black;
    }
  }
}
</style>