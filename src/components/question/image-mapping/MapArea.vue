<template>
  <area
    :title="questionDescription"
    :shape="questionArea.shape"
    :coords="concatCoords"
    :alt="questionDescription"
    @click="submitQuestion()"
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
    storeAnswer() {
      const givenAnswer = {
        questionCode: this.question.code,
        answerCode: this.questionArea.mapsAnswerCode,
        answerValue: this.findAreasAnswer.label,
      }
      bus.$emit('storeAnswer', givenAnswer);
    },
    nextQuestion() {
      const next = this.findQuestionsNext();
      bus.$emit('nextQuestion', next);
    },
    submitQuestion(question, answer) {
      this.storeAnswer();
      this.nextQuestion();
    },
  },
};

</script>

<style scoped>
</style>
