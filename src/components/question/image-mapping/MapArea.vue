<template>
  <area
    :title="questionDescription"
    :shape="questionArea.shape"
    :coords="concatCoords"
    :alt="questionDescription"
    @click="nextQuestion()"
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
    findQuestionsNext: function () {
      return this.question.answers.find(
        (answer) => {
          return answer.code == this.questionArea.mapsAnswerCode;
        }
      ).next;
    },
    nextQuestion: function () {
      const next = this.findQuestionsNext();
      bus.$emit('nextQuestion', next);
    },
  },
};

</script>

<style scoped>
</style>
