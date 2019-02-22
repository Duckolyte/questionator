<template>
  <base-question>
    <div slot="form-header">
      <h3 class="headline">{{question.label}}</h3>
    </div>
    <div slot="form-fields">
    </div>
    <div slot="form-controls">
      <v-btn color="secondary"
        @click="submitQuestion(question, question.answers[0])"
      >
        {{question.answers[0].label}}
      </v-btn>
      <v-btn color="secondary"
        @click="submitQuestion(question, question.answers[1])"
      >
        {{question.answers[1].label}}
      </v-btn>
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
      //this.nextQuestion(answer.next);
    },
  },
};

</script>

<style scoped>
</style>
