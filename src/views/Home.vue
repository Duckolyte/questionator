<template>
  <v-layout
    column

  >
    <v-stepper v-model="e1">

      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Abstract</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Register</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Login</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            color="primary"
            class="py-3 my-3"
          >
            <h1 class="display-2 font-weight-thin">Schmerz-Interview</h1>
          </v-card>
          <v-card
            flat
          >
            <h3 class="headline font-weight-thin mb-3">
              Dieses Interview dient der Aufnahme Ihrer Beschwerden.
              <br>
              Sie werden Schritt für Schritt durch das Interview geleitet.
            </h3>
          </v-card>
          <v-card>
            <v-btn
              flat
              color="secondary"
              @click="e1 = 2"
            >
              Weiter
            </v-btn>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-5"
          >
            <que-register>
            </que-register>
          </v-card>

          <v-btn
            flat
            color="secondary"
            @click="e1 = 3"
          >
            Registrieren
          </v-btn>

          <v-btn
            flat
            color="secondary"
            @click="e1 = 3"
          >
            Weiter
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-5"
          >
            <que-login>
            </que-login>
          </v-card>

          <v-btn
            color="secondary"
            flat
            to="/user"
          >
            Login
          </v-btn>

          <v-btn
            flat
            color="secondary"
            @click="e1 = 2"
          >
            Zurück
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>

    </v-stepper>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/authentication/Login.vue';
import Register from '@/components/authentication/Register.vue';

export default {
  name: 'home',
  components: {
    'que-login': Login,
    'que-register': Register,
  },
  data() {
    return {
      e1: 1,
    };
  },
};
</script>
