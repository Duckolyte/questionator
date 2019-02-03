<template>
  <base-sidebar>
    <div slot="sidebar-header">
      <h3>sidebar question summary header</h3>
    </div>
    <div slot="sidebar-body">
      <p>sidebar question summary content</p>
    </div>
    <div slot="sidebar-footer">
      <p>sidebar question summary footer</p>
    </div>
  </base-sidebar>
</template>

<script>

import BaseSidebar from './BaseSidebar.vue';

export default
{
  components: {
    'base-sidebar': BaseSidebar,
  },
  data() {
    return {

    };
  },
  methods: {

  },
};

</script>

<style scoped>

</style>
