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
          @click="nextQuestion(answer.next)"
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
    nextQuestion: function (next) {
      bus.$emit('nextQuestion', next);
    }
  },
};

</script>

<style scoped>
</style>
