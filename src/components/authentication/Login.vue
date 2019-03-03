<template>
  <base-auth>
    <div slot="form-header">
    </div>
    <div slot="form-body">
      <v-card
        color="primary"
        class="py-3 my-1"
      >
        <h3 class="headline">Sign On</h3>
      </v-card>
      <v-card>
        <v-text-field
          v-model="user.email"
          label="Email"
          clearable
          maxlength="20"
        >
        </v-text-field>

        <v-text-field
          v-model="user.password"
          label="Passwort"
          clearable
          maxlength="20"
          :append-icon="showPw ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="showPw ? 'text' : 'password'"
          @click:append="showPw = !showPw"
        >
        </v-text-field>
        <!--
        <v-btn>
          Sign on
        </v-btn>
        -->
      </v-card>
    </div><!-- slot: form-body -->
    <div slot="form-footer">
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
      user: {
        Type: Object,
      },
      showPw: false,
      rules: {
        required: value => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      },
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
