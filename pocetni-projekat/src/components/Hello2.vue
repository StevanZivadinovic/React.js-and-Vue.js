<template>
  <div @click="hideDiv">
    <slot></slot><!--ovo poziva default-niSlot-->
    <slot name="linkovi"></slot>
    <div class="modal" :class="{ sale: trow === 'salePrim' }"></div>
  </div>
</template>

<script>
export default {
  props: ["heder", "drugiProps", "trow"],
  methods: {
    hideDiv() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
h2 {
  border: 1px solid red;
}
p {
  border: 1px solid red;
}
</style>