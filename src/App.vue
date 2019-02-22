<template>
  <v-app light id="app">
    <app-header/>
    <router-view
      class="pa-5"
      :questionary="questionary"
      :user="user"
    />
    <app-footer/>
  </v-app>
</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
  },
  data() {
    return {
      user: {
        lastname: "",
        firstname: "",
        gender: "",
        dateOfBirth:"",
        patientId: "",
        caseId: "",
      },
      questionary: {
        id: "",
        patientId: "test_000321",
        questionAnswerPairs: [],
      },
    };
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
