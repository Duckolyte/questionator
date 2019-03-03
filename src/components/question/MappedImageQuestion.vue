<template>
  <base-question>
    <div slot="form-header">
      <h3 class="headline">{{question.label}}</h3>
    </div>
    <div slot="form-fields">

      <v-container grid-list-xs,sm,md,lg,xl>
        <v-layout row wrap>
          <v-flex xs6>
            <img
              src="./image-mapping/TODO_REMOVE_human-body.png"
              width="600"
              height="600"
              alt="Oops, missing image!"
              usemap="#questionmap"
            />

            <map name="questionmap">
              <map-area
                v-for="questionArea in answerMap.areas"
                :key="questionArea.id"
                :question="testQuestion"
                :questionArea="questionArea"
                style="background: red;"
              >
              </map-area>
            </map>
          </v-flex>
          <v-flex xs6>
            <v-list>
              <v-list-tile
                for="answer in question.answers"
              >
                <v-list-tile-title>
                  {{answer.label}}
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>

    </div>
    <div slot="form-controls">
    </div>
    <div slot="form-footer">
    </div>
  </base-question>
</template>

<script>

import { bus } from '../../main';

import BaseQuestion from './BaseQuestion.vue';
import MapArea from './image-mapping/MapArea.vue';

export default
{
  props: {
    question: {
      type: Object,
    },
  },
  components: {
    'base-question': BaseQuestion,
    'map-area': MapArea,
  },
  computed: {
    // TODO: instead of a computed property use a new tempalte for the area fields maybe or use a
    // method that concatenates the x,y,width,height to a property
  },
  data() {
    return {
      /*
      answerMap: {
        mapId: 0,
        mapsQuestionCode: 1001,
        areas: [
          {
            id: 0,
            mapsAnswerCode: 0,
            shape: "circle",
            coords: "100,100,30",
            areaPosX: 100,
            areaPosY: 100,
            areaWidth: '',
            areaHeight: '',
            areaRadius: 30,
          },
          {
            id: 1,
            mapsAnswerCode: 1,
            shape: "rect",
            coords: "100,0,200,200",
            areaPosX: 100,
            areaPosY: 0,
            areaWidth: 200,
            areaHeight: 200,
            areaRadius: '',
          },
          {
            id: 2,
            mapsAnswerCode: 2,
            shape: "rect",
            coords: "200,200,300,300",
            areaPosX: 150,
            areaPosY: 150,
            areaWidth: 50,
            areaHeight: 50,
            areaRadius: '',
          },
          {
            id: 3,
            mapsAnswerCode: 3,
            shape: "rect",
            coords: "300,300,400,400",
            areaPosX: 200,
            areaPosY: 200,
            areaWidth: 50,
            areaHeight: 50,
            areaRadius: '',
          },
          {
            id: 4,
            mapsAnswerCode: 4,
            shape: "rect",
            coords: "200,0,300,100",
            areaPosX: 250,
            areaPosY: 250,
            areaWidth: 50,
            areaHeight: 50,
            areaRadius: '',
          },
          {
            id: 5,
            mapsAnswerCode: 5,
            shape: "rect",
            coords: "0,0,300,300",
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
        imageSource: "./image-mapping/TODO_REMOVE_human-body.png",
        imageWidth: "500",
        imageHeight:"500"
      },
      testQuestion: {
        code: 1001,
        label: 'test question label',
        sourceId: 0,
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
    */
  },
  methods: {
    fetchImageMap() {
      const vueQuestion = this;
      fetch(
        'http://localhost:8001' + '/imagemap',
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
    }
    testClick: function () {
      console.log('default clicked');
    },
    nextQuestion(next) {
      bus.$emit('nextQuestion', next);
    },
  },
};

</script>

<style scoped>
</style>
