<template>
  <div class="question">
    <question-summary></question-summary>
    <div id="question-container">
      <component :is="activeQuestion"></component>
    </div>
  </div>
</template>

<script>

import InputQuestion from '../components/question/InputQuestion.vue';
import RadioQuestion from '../components/question/RadioQuestion.vue';
import QuestionSummary from '../components/sidebar/QuestionSummary.vue';

export default {
  /*
  props:
  {
    question:
    {
      type: Object,
      required: true,
      validator: function(value)
      {
        return [
          'input-question',
          'radio-question'
        ].indexOf(value.questionType) !== -1
      }
    }
  }, */
  components:
  {
    'input-question': InputQuestion,
    'radio-question': RadioQuestion,
    'question-summary': QuestionSummary,
  },
  data() {
    return {
      activeQuestion: 'radio-question', // TODO change to dynamic value question.questionType
    };
  },
};

</script>

<style scoped>

.question {
  display: flex;
  flex-direction: row;
}

#question-container {
  flex: auto;
}

</style>
