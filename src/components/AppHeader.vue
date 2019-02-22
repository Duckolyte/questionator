<template>
    <v-toolbar dense color="primary">
      <v-toolbar-side-icon>
      </v-toolbar-side-icon>

      <v-btn icon>
        <v-icon>home</v-icon>
      </v-btn>

      <v-toolbar-title>
        Schmerz-Interview
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

    </v-toolbar>
    <!--
    <span id="app-header-icon"><b>HEADER_ICON</b></span>
    <span id="app-header-title"><b>Questionator</b></span>
    <span id="app-header-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/question">Question</router-link> |
      <router-link to="/auth">Authentication</router-link> |
      <router-link to="/user">User Recording</router-link> |
      <router-link to="/answer-overview">Answer Overview</router-link> |
    </span>
    -->
</template>

<script>

// import ... from './...'

export default {

  components: {

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

#nav {
  background: #DDD;
  margin-bottom: 2em;
}

#app-header-icon {
  float: left;
}

#app-header-title {
  float: left;
  padding: 0 1em 0 1em;
}

#app-header-nav {
  float: right;
}

</style>
