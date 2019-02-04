<template>
  <base-question>
    <div slot="form-header">
      <h1>radio question header</h1>
    </div>
    <div slot="form-fields">
      <h3>Color</h3>
      <input type="radio" name="test-radio" value="green" label="green"><br>
      <input type="radio" name="test-radio" value="red" label="red"><br>
      <input type="radio" name="test-radio" value="blue" label="blue"><br>
    </div>
    <div slot="form-controls">
      <button type="button" name="button">Next</button>
    </div>
    <div slot="form-footer">
      <p>radio question footer</p>
    </div>
  </base-question>
</template>

<script>

import BaseQuestion from './BaseQuestion.vue';

export default
{
  props: {
    question: {
      type: Object,
    },
  },
  components:
  {
    'base-question': BaseQuestion,
  },
  data() {
    return {

    };
  },
  methods:
  {

  },
};

</script>

<style scoped>
</style>
