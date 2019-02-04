<template>
  <div class="question-container">
    <form onSubmit="return false">
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
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

.question-container {
  border: #3DD solid 5px;
  background: #FFF;
  border-radius: 10px;
  margin: 0 5em 5em 5em;
  padding: 3em;
  /*box-shadow: 8px 8px 5px 8px #888888;*/
}

</style>
