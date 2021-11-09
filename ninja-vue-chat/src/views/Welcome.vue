<template>
  <div class="container welcome">
    Welcome
    <div v-if="showLogin" >
      <LoginForm/>
    <p>No account yet? <span @click="showLogin=false">Signup</span></p>
    </div>
    <div v-else>
    <SignupForm />
      <p>Already registered? <span @click="showLogin=true">Login</span></p>
    </div>
    <!--  -->
  </div>
</template>

<script>
import SignupForm from "./../components/SignupForm.vue";
import LoginForm from "./../components/LoginForm.vue";

export default {
  components: {
    SignupForm: SignupForm,
    LoginForm:LoginForm
  },
  data(){
    return{
      showLogin:true
    }
  }
};
</script>

<style>

</style>