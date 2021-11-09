<template>
  <div class="container welcome">
    Welcome
    <SignupForm />
    <!-- <LoginForm/> -->
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
};
</script>

<style>
</style>