<template>
  <div class="authentication">
    <component :is="authPage"></component>
  </div>
</template>

<script>

import AuthRegister from '../components/authentication/Register.vue';
import AuthLogin from '../components/authentication/Login.vue';

export default {
  /*
  props:
  {
    question:
    {
      type: Object,
      required: true,
      validator: function(value)
      {
        return [
          'input-question',
          'radio-question'
        ].indexOf(value.questionType) !== -1
      }
    }
  }, */
  components:
  {
    'auth-register': AuthRegister,
    'auth-login': AuthLogin,
  },
  data() {
    return {
      authPage: 'auth-register', // TODO change to dynamic value question.questionType
    };
  },
};

</script>

<style scoped>
</style>
