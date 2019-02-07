<template>
  <base-question>
    <div slot="form-header">
      <h3>{{question.label}}</h3>
    </div>
    <div slot="form-fields">
      <template v-for="answer in question.answers">
        <input
          type="radio"
          name="answer.code"
          value="green"
          label="green"
          @click="submitQuestion(question, answer)"
        >
        <label for="answer.code">{{answer.label}}</label>
        <br>
      </template>
    </div>
    <div slot="form-controls">
      <!-- OBSOLETE
      <button
        type="button"
        name="button"
      >
        Weiter
      </button>
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
