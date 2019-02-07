<template>
  <base-question>
    <div slot="form-header">
      <h3>{{question.label}}</h3>
    </div>
    <div slot="form-fields">
      <input
        type="range"
        min="questionMin"
        max="questionMax"
        step="questionStep"
        name="questionRange"
        v-model:value.lazy="question.answers[0].value"
        @change="submitQuestion(question, question.answers[0])"
      />
    </div>
    <div slot="form-controls">
      <!--
      <input
        type="button"
        name=""
        value="Weiter"
        @click="nextQuestion(question.answers[0].next)"
      />
      -->
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
  computed: {
    questionMin: function () {
      return this.question.answers[0].min_range;
    },
    questionMax: function () {
      return this.question.answers[0].max_range;
    },
    questionStep: function () {
      return this.question.answers[0].step;
    }
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
