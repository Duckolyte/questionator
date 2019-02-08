<template>
  <div class="question">
    <question-summary
      :questionary="questionary"
    >
    </question-summary>
    <div id="question-container">
      <component
        :is="questionView"
        :questionary="questionary"
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
import MappedImageQuestion from '../components/question/MappedImageQuestion.vue';
import QuestionSummary from '../components/sidebar/QuestionSummary.vue';

export default {
  props:
  {
    questionary:
    {
      type: Object,
      required: true,
    },
  },
  components:
  {
    'input-question': InputQuestion,
    'radio-question': RadioQuestion,
    'binary-question': BinaryQuestion,
    'slider-question': SliderQuestion,
    'mappedimage-question': MappedImageQuestion,
    'question-summary': QuestionSummary,
  },
  data() {
    return {
      questionView: 'radio-question',
      currentQuestion: {},
    };
  },
  methods: {
    determineQuestionView(questionDefintion) {
      if (questionDefintion.answers.length > 1) {
        if (questionDefintion.answers[0].label === 'Ja') {
          return 'binary-question';
        } else {
          if (questionDefintion.sourceId) {
            return 'mappedimage-question';
          }
          return 'radio-question';
        }
      } else if (questionDefintion.answers.length === 1) {
        if (questionDefintion.answers[0].hasOwnProperty('max_range')) {
          return 'slider-question';
        }
        return 'input-question';
      } else {
        return -1;
      }
    },
    storeQuestionary() {
      const vueQuestion = this;
      (async () => {
        const rawResponse = await fetch('http://localhost:8002/questionary', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(vueQuestion.questionary)
        });
        const content = await rawResponse;

        console.log(content);
      })();
    },
    fetchQuestion(url) {
      const vueQuestion = this;
      fetch(
        'http://localhost:8001' + url,
        {
          method: 'get',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
        },
      ).then((response) => {
        response.text().then((text) => {
          const responseBody = JSON.parse(text);
          vueQuestion.questionView = vueQuestion.determineQuestionView(
            responseBody,
          );
          vueQuestion.currentQuestion = responseBody;
        });
      });
    },
    storeAnswer(questionAnswerPair) {
      this.questionary.questionAnswerPairs.push(
        questionAnswerPair
      );
    },
  },
  beforeCreate() {
  },
  created() {
    const vueQuestion = this;

    bus.$on('nextQuestion', (nextQuestionUrl) => {
      if (nextQuestionUrl === '/acquisition') {
        vueQuestion.storeQuestionary();
      } else {
        vueQuestion.fetchQuestion(nextQuestionUrl);
      }
    });

    bus.$on('storeAnswer', (answer) => {
      vueQuestion.storeAnswer(answer);
    });

    // TODO: later should be replaced by calling from the UserRecord.vue
    // TODO: bus.$emit('nextQuestion', init_question) and so fetch the first question
    const url = '/question?code=1';
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
