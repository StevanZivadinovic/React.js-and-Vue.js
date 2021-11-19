<template>
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
</template>

<script>
import { projectAuth, timestamp } from "./../firebase/config.js";
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      const chat = {
        name: projectAuth.currentUser.displayName,
        message: this.message,
        createdAt: timestamp(),
      };
      console.log(chat);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: 1rem;
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 0.6rem;
    padding: 1rem;
    border: none;
    border-bottom: 0.1rem solid rgba(black,.1);
    font-family: inherit;
    outline: none;
    font-size: 1.5rem;

    &:focus{
      border-bottom: 0.1rem solid black;
    }
  }
  
}
</style>