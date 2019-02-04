<template>
  <base-auth>
    <div slot="form-header">
      <h3>Sign On</h3>
    </div>
    <div slot="form-body">
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text">Accountname:</span>
        </div>
        <input
          class="form-control"
          type="text"
          aria-label="username"
          placeholder="example@mymail.com"
          name="username"
        />
      </div>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text">Password:</span>
        </div>
        <input
          class="form-control"
          type="password"
          aria-label="password"
          placeholder="**********"
          name="password"
        />
      </div>
    </div><!-- slot: form-body -->
    <div slot="form-footer">
      <input
        class="btn btn-outline-primary mb-2"
        type="submit"
        name="commit"
        value="Sign On"
      />
    </div>
  </base-auth>
</template>

<script>

import BaseAuth from './BaseAuth.vue';

export default {

  components: {
    'base-auth': BaseAuth,
  },
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {

  },
};

</script>

<style scoped>

</style>
