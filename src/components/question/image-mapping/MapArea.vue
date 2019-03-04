<template>
  <area
    :title="questionDescription"
    :shape="questionArea.shape"
    :coords="concatCoords"
    :alt="questionDescription"
    @click="submitQuestion(question, areaAnswer)"
  >
</template>

<script>

import { bus } from '../../../main';

export default
{
  props: {
    questionArea: {
      type: Object,
    },
    question: {
      type: Object,
    },
    areaAnswer: {
      type: Object,
    }
  },
  computed: {
    questionDescription: function () {
      return this.question.answers.find(
        (answer) => { return answer.code == this.questionArea.mapsAnswerCode}
      ).label;
    },
    concatCoords: function () {
      if (this.questionArea.shape === 'circle') {
        return this.questionArea.areaPosX + ', '
          +  this.questionArea.areaPosY + ', '
          +  this.questionArea.areaRadius;
      } else {
        return this.questionArea.areaPosX + ', '
          + this.questionArea.areaPosY + ', '
          + this.questionArea.areaWidth + ', '
          + this.questionArea.areaHeight;
      }
    },
  },
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    findAreasAnswer() {
      return this.question.answers.find(
        (answer) => {
          return answer.code == this.questionArea.mapsAnswerCode;
        }
      );
    },
    findQuestionsNext() {
      return this.findAreasAnswer().next;
    },
    storeAnswer(question, answer) {
      const givenAnswer = new this.$_qap.QuestionAnswerPair(question, answer);
      bus.$emit('storeAnswer', givenAnswer);
    },
    nextQuestion() {
      const next = this.findQuestionsNext();
      bus.$emit('nextQuestion', next);
    },
    submitQuestion(question, answer) {
      this.storeAnswer(question, answer);
    },
  },
};

</script>

<style scoped>
</style>
