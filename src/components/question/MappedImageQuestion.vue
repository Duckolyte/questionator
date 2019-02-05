<template>
  <base-question>
    <div slot="form-header">
      <h3>{{question.label}}</h3>
    </div>
    <div slot="form-fields">
      <img
        src="questionImage.imageSource"
        width="145"
        height="126"
        alt="Planets"
        usemap="#img-map"
      >
      <map name="img-map">
        <template v-for="questionArea in answerMap.areas">
          <area
            title="question.answers.find(
              (answer) => {answer.code == questionArea.mapsAnswerCode}
            ).label"
            shape="questionArea.shape"
            coords="0,0,82,126"
            alt="question.answers.find(
              (answer) => {answer.code == questionArea.mapsAnswerCode}
            ).label"
          />
        </template>
      </map>
    </div>
    <div slot="form-controls">
      <input
        type="button"
        name=""
        :value="question.answers[0].label"
        @click="nextQuestion(question.answers[0].next)"
      />
      <input
        type="button"
        name=""
        :value="question.answers[1].label"
        @click="nextQuestion(question.answers[1].next)"
      />
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
  computed: {
    // TODO: instead of a computed property use a new tempalte for the area fields maybe or use a
    // method that concatenates the x,y,width,height to a property
  },
  data() {
    return {
      answerMap: {
        mapId: 0,
        mapsQuestionCode: 1001,
        areas: [
          {
            id: 0,
            mapsAnswerCode: 0,
            shape: "circle",
            areaPosX: 100,
            areaPosY: 100,
            areaWidth: '',
            areaHeight: '',
            areaRadius: 10,
          },
          {
            id: 1,
            mapsAnswerCode: 1,
            shape: "rect",
            areaPosX: 0,
            areaPosY: 0,
            areaWidth: 50,
            areaHeight: 50,
            areaRadius: '',
          },
          {
            id: 2,
            mapsAnswerCode: 2,
            areaPosX: 150,
            areaPosY: 150,
            areaWidth: 50,
            areaHeight: 50,
            areaRadius: '',
          },
          {
            id: 3,
            mapsAnswerCode: 3,
            areaPosX: 200,
            areaPosY: 200,
            areaWidth: 50,
            areaHeight: 50,
            areaRadius: '',
          },
          {
            id: 4,
            mapsAnswerCode: 4,
            areaPosX: 250,
            areaPosY: 250,
            areaWidth: 50,
            areaHeight: 50,
            areaRadius: '',
          },
          {
            id: 5,
            mapsAnswerCode: 5,
            areaPosX: 300,
            areaPosY: 300,
            areaWidth: 50,
            areaHeight: 50,
            areaRadius: '',
          }
        ]
      },
      questionImage: {
        id: 0,
        questionCode: 1001,
        imageSource: "body.png",
      },
      testQuestion: {
        code: 1001,
        label: 'test question label',
        answers: [
          {
            code: 0,
            label: "Kopf",
            next: "/question?code=1"
          },
          {
            code: 1,
            label: "Körper",
            next: "/question?code=1"
          },
          {
            code: 2,
            label: "Arm links",
            next: "/question?code=1"
          },
          {
            code: 3,
            label: "Arm rechts",
            next: "/question?code=1"
          },
          {
            code: 4,
            label: "Bein links",
            next: "/question?code=1"
          },
          {
            code: 5,
            label: "Bein rechts",
            next: "/question?code=1"
          }
        ]
      }
    };
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
