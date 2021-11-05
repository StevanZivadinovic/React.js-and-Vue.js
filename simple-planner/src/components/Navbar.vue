<template>
  <div class="navbar">
      <router-link :to="{name:'home'}">Home</router-link>
      <router-link :to="{name:'addComponent'}">Add a New Project</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
    display: flex;
    justify-content: center;
    
}
a{
    margin: 0 1rem;
    color: #999;
    font-size: 1.5rem;
    text-decoration: none;
}
a.router-link-active{
    border-bottom: 2px solid #00ce89;
    padding-bottom: .4rem;
}
</style>