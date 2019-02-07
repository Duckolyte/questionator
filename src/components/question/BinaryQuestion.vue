<template>
  <base-question>
    <div slot="form-header">
      <h3>{{question.label}}</h3>
    </div>
    <div slot="form-fields">
    </div>
    <div slot="form-controls">
      <input
        type="button"
        name=""
        :value="question.answers[0].label"
        @click="submitQuestion(question, question.answers[0])"
      />
      <input
        type="button"
        name=""
        :value="question.answers[1].label"
        @click="submitQuestion(question, question.answers[1])"
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
    storeAnswer(question, answer) {
      const givenAnswer = new this.$_qap.QuestionAnswerPair(question, answer);
      bus.$emit('storeAnswer', givenAnswer);
    },
    nextQuestion(next) {
      bus.$emit('nextQuestion', next);
    },
    submitQuestion(question, answer) {
      this.storeAnswer(question, answer);
      this.nextQuestion(answer.next);
    },
  },
};

</script>

<style scoped>
</style>
