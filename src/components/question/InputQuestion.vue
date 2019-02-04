<template>
  <base-question>
    <div slot="form-header">
      <h1>input question header</h1>
    </div>
    <div slot="form-fields">
      <input type="text" name="" value="">
    </div>
    <div slot="form-controls">
      <button type="button" name="button">Next</button>
    </div>
    <div slot="form-footer">
      <p>input question footer</p>
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
  components: {
    'base-question': BaseQuestion,
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
