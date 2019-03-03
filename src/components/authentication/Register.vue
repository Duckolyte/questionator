<template>
  <base-auth>
    <div slot="form-header">
    </div>
    <div slot="form-body">

        <v-toolbar
          color="primary"
        >
          <h3 class="headline">Register</h3>
        </v-toolbar>

      <v-card>
        <v-text-field
          v-model="user.lastname"
          label="Name"
          clearable
          maxlength="20"
        >
        </v-text-field>
        <v-text-field
          v-model="user.firstname"
          label="Vorname"
          clearable
          maxlength="20"
        >
        </v-text-field>
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
          counter
          :append-icon="show1 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
        >
        </v-text-field>
        <v-text-field
          v-model="user.confirmPassword"
          label="Passwort bestätigen"
          clearable
          maxlength="20"
          counter
          :append-icon="show2 ? 'visibility' : 'visibility_off'"
          :rules="[rules.required, rules.min]"
          :type="show2 ? 'text' : 'password'"
          @click:append="show2 = !show2"
        >
        </v-text-field>
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
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      show1: false,
      show2: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
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
