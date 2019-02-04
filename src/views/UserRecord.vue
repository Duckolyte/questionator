<template>
  <div class="user-record">
    <user-record></user-record>
  </div>
</template>

<script>

import UserRecord from '../components/user/UserRecord.vue';

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
    'user-record': UserRecord,
  },
  data() {
    return {
    };
  },
};

</script>

<style scoped>
</style>
