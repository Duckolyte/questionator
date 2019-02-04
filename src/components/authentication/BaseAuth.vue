<template>
  <div class="auth-container">
    <form>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-body">
        <slot name="form-body"></slot>
      </div>
      <div id="form-footer">
        <slot name="form-footer"></slot>
      </div>
    </form>
  </div>
</template>

<script>

export default
{
  components:
  {

  },
  data() {
    return {

    };
  },
};

</script>

<style scoped>
</style>
