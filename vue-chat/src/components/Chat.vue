<template>
<div >
  <div>Chat {{mojeIme}}</div>
  <div class="h-3/4 border-4 w-6/12 flex flex-col h-80 mx-auto my-0 justify-center bg-green-100">
  <h2 class="text-center text-4xl text-green-600 pt-10">Ninja chat</h2>
  
      <div class="card flex h-80 w-full">
          <ul class="w-full px-10 py-10  py-4 mt-4 overflow-auto">
              <li class="px-10 py-10 bg-green-600 w-6/12 rounded">
                  <span class="">Name </span>
                  <span class="">message </span><br>
                  <span class="">time </span>

              </li>

             
          </ul>
      </div>
      <AddMessage :name='mojeIme' />
  </div>
</div>
</template>

<script>
import AddMessage from './AddMessage.vue'
export default {
    name:'Chat',
props:['mojeIme'],
components:{
    AddMessage
}
}
</script>

<style>
/* .aa{
    height: 60%;
} */
</style>