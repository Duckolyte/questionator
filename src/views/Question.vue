<template>
  <div class="question">
    <!-- <question-header></question-header> -->
    <component :is="activeQuestion"></component>
    <!-- <question-footer"></question-footer> -->
  </div>
</template>

<script>

import InputQuestion from '../components/question/InputQuestion.vue';
import RadioQuestion from '../components/question/RadioQuestion.vue';

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
  },
  data() {
    return {
      activeQuestion: 'radio-question', // TODO change to dynamic value question.questionType
    };
  },
};

</script>

<style scoped>

</style>
