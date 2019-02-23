<template>
  <div id="app-footer">
    <v-bottom-nav
      :value="true"
      absolute
      color="transparent"
    >

      <v-btn
        color="teal"
        flat
        to="/"
      >
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        to="/user"
      >
        <span>Patienten Daten</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        to="/question"
      >
        <span>Fragebogen</span>
        <v-icon>mdi-file</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        to="/answer-overview"
      >
        <span>Übersicht</span>
        <v-icon>mdi-file-check</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
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

<style>

</style>
