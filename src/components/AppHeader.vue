<template>
  <div id="nav">
    <span id="app-header-icon"><b>HEADER_ICON</b></span>
    <span id="app-header-title"><b>Questionator</b></span>
    <span id="app-header-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/question">Question</router-link>
    </span>
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
