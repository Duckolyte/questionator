<template>
  <div class="question">
    <question-summary></question-summary>
    <div id="question-container">
      <component
        :is="questionView"
        :question="currentQuestion"
      >
      </component>
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
      questionView: 'radio-question',
      currentQuestion: {},
      questionary: {},
    };
  },
  methods: {
    determineQuestionView: function (questionDefintion) {
      if (questionDefintion.answers.length > 1) {
        if (questionDefintion.answers[0].label === 'Ja') {
          return 'question-binary';
        } else {
          return 'radio-question';
        }
      }
      else if (questionDefintion.answers.length === 1) {
        return 'input-question';
      } else {
        return -1;
      }
    }
  },
  created() {
    let vueQuestion = this;

    let url = 'http://localhost:8001/question?code=150';
    fetch(
      url,
      {
        method: 'get',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'accept': 'application/json'
        }
      }
    ).then(function(response) {
      response.text().then( function (text) {
        let responseBody = JSON.parse(text);
        vueQuestion.questionView = vueQuestion.determineQuestionView(
          responseBody
        );
        vueQuestion.currentQuestion = responseBody;
      });
    });
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
