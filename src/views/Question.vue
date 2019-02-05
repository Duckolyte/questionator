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

import { bus } from '../main';

import InputQuestion from '../components/question/InputQuestion.vue';
import RadioQuestion from '../components/question/RadioQuestion.vue';
import BinaryQuestion from '../components/question/BinaryQuestion.vue';
import SliderQuestion from '../components/question/SliderQuestion.vue';
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
    'binary-question': BinaryQuestion,
    'slider-question': SliderQuestion,
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
          return 'binary-question';
        } else {
          return 'radio-question';
        }
      }
      else if (questionDefintion.answers.length === 1) {
        if (questionDefintion.answers[0].hasOwnProperty('max_range')) {
          return 'slider-question';
        }
        return 'input-question';
      } else {
        return -1;
      }
    },
    fetchQuestion: function (url) {
      let vueQuestion = this;
      fetch(
        'http://localhost:8001' + url,
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
  },
  created() {

    let vueQuestion = this;

    bus.$on('nextQuestion', (nextQuestionUrl) => {
      vueQuestion.fetchQuestion(nextQuestionUrl);
    });

    // TODO: later should be replaced by calling from the UserRecord.vue
    // TODO: bus.$emit('nextQuestion', init_question) and so fetch the first question
    let url = '/question?code=1';
    vueQuestion.fetchQuestion(url);
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
