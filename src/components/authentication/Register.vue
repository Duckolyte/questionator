<template>
  <base-auth>
    <div slot="form-header">
      <h3>Register</h3>
    </div>
    <div slot="form-body">

      <v-card
        color="secondary"
      >
      </v-card>

      <v-card>

      </v-card>

      <!--
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text">Account name:</span>
        </div>
        <input
          class="form-control"
          type="email"
          aria-label="username"
          placeholder="example@mymail.com"
          name="email"
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
          placeholder="enter password"
          name="password"
        />
      </div>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text">Password confirmation:</span>
        </div>
        <input
          class="form-control"
          type="password"
          aria-label="password"
          placeholder="confirm password"
          name="password-confirmation"
        />
      </div>
      -->
    </div><!-- slot: form-body -->
    <div slot="form-footer">
      <!--
      <input
        class="btn btn-outline-primary mb-2"
        type="submit"
        name="commit"
        value="Register"
      />
      -->
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
