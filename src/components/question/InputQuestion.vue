<template>
  <base-question>
    <div slot="form-header">
      <h3>{{question.label}}</h3>
    </div>
    <div slot="form-fields">
      <label>{{question.answers[0].label}}</label>
      <input
        type="text"
        name=""
        v-model:value.lazy="question.answers[0].value"
        @keyup.enter="nextQuestion(question.answers[0].next)"
      />
    </div>
    <div slot="form-controls">
    </div>
    <div slot="form-footer">
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
    nextQuestion: function (next) {
      console.log('nextQuestion');
      console.log(next);
    }
  },
};

</script>

<style scoped>
</style>
