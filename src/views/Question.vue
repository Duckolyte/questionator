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
    /*
    * moved to AnswerSummary
    *
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
    */
    setCurrentQuestion(question) {
      this.currentQuestion = question;
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

          vueQuestion.setCurrentQuestion(
            new vueQuestion.$_qap.Question(
              responseBody.code,
              responseBody.label,
              responseBody.answers
            )
          );

        });
      });
    },
    storeAnswer(questionAnswerPair) {
      // check if pair already in questionary
      let pairs = this.questionary.questionAnswerPairs;
      let pairInPairs = pairs.find(
        (pair) => {
          return pair.question.questionaryQuestionId == questionAnswerPair.question.questionaryQuestionId
        }
      );
      if (pairInPairs) {
        const oldAnswersNext = pairInPairs.answer.next;
        this.updatePair(pairInPairs, questionAnswerPair.question, questionAnswerPair.answer)
        const nextPair = this.findNextQuestion(pairInPairs);
        if (nextPair) {
          // remove further qap in questionary if next does not point to old next
          if (oldAnswersNext !== questionAnswerPair.answer.next) {
            const pairIndex = pairs.findIndex(
              (pair) => {
                return pair.question.questionaryQuestionId == questionAnswerPair.question.questionaryQuestionId
              }
            );
            pairs.length = pairIndex + 1
            this.nextQuestion(questionAnswerPair.answer.next)
          }
          else {
            this.currentQuestion = nextPair.question;
          }
        } else {
          this.nextQuestion(pairInPairs.answer.next)
        }
      } else {
        pairs.push(questionAnswerPair);
        this.nextQuestion(questionAnswerPair.answer.next);
      }
    },
    nextQuestion(nextQuestionUrl) {
      if (nextQuestionUrl === '/acquisition') {
        this.$router.push('/answer-overview')
      } else {
        this.fetchQuestion(nextQuestionUrl);
      }
    },
    findNextQuestion(activePair) {
      const activePairIndex = this.questionary.questionAnswerPairs.findIndex(
        (pair) => {return pair.id == activePair.id}
      );
      if (activePairIndex < (this.questionary.questionAnswerPairs.length-1)) {
        return this.questionary.questionAnswerPairs[activePairIndex+1]
      }
      return "";
    },
    updatePair(pair, question, answer) {
      pair.question = question;
      pair.answer = answer;
    },
    initQuestion(vueQuestion) {
      const questionaryContent = vueQuestion.questionary.questionAnswerPairs;
      const questionarySize = questionaryContent.length;
      if (questionarySize > 0) {
        if (vueQuestion.$route.fullPath ==='/question') {
          const url = questionaryContent[questionarySize-1].answer.next;
          vueQuestion.fetchQuestion(url);
        } else {
          const url = vueQuestion.$route.fullPath;
          const urlQuery = vueQuestion.$route.query;
          let pairs = vueQuestion.questionary.questionAnswerPairs;
          let pair = pairs.find(
            (pair) => {return pair.id == urlQuery.pairid}
          );
          vueQuestion.currentQuestion = pair.question;

          //vueQuestion.fetchQuestion(url);
        }
      } else {
        // TODO here should load dynamically the init question of the app questionset
        const url = '/question?code=1';
        vueQuestion.fetchQuestion(url);
      }
    },
  },
  beforeCreate() {
  },
  created() {
    const vueQuestion = this;

    bus.$on('goToQuestionInQuestionary', (questionAnswerPair) => {
      vueQuestion.questionView = vueQuestion.determineQuestionView(
        questionAnswerPair.question
      );
      this.currentQuestion = questionAnswerPair.question;
    });

    bus.$on('storeAnswer', (answer) => {
      vueQuestion.storeAnswer(answer);
    });

    vueQuestion.initQuestion(vueQuestion);
  },
  destroyed() {
    bus.$off('storeAnswer');
    bus.$off('goToQuestionInQuestionary');
  }
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
