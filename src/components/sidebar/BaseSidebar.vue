<template>
  <div id="base-sidebar">
    <div id="sidebar-header">
      <slot name="sidebar-header"></slot>
    </div>
    <div id="sidebar-body">
      <slot name="sidebar-body"></slot>
    </div>
    <div id="sidebar-footer">
      <slot name="sidebar-footer"></slot>
    </div>
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

#base-sidebar {
  float: left;
}

</style>
