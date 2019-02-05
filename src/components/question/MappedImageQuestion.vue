<template>
  <base-question>
    <div slot="form-header">
      <h3>{{question.label}}</h3>
    </div>
    <div slot="form-fields">
      <div

      >
      </div>
    </div>
    <div slot="form-controls">
      <input
        type="button"
        name=""
        :value="question.answers[0].label"
        @click="nextQuestion(question.answers[0].next)"
      />
      <input
        type="button"
        name=""
        :value="question.answers[1].label"
        @click="nextQuestion(question.answers[1].next)"
      />
    </div>
    <div slot="form-footer">
    </div>
  </base-question>
</template>

<script>

import { bus } from '../../main';

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
      bus.$emit('nextQuestion', next);
    }
  },
};

</script>

<style scoped>
</style>
