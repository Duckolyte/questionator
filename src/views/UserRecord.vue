<template>
  <div class="user-record">
    <user-record
      :user="user"
    >
    </user-record>
  </div>
</template>

<script>

import UserRecord from '../components/user/UserRecord.vue';

export default {
  props:
  {
    user: {
      type: Object,
    }
  },
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
