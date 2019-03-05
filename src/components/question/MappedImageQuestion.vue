<template>
  <base-question>
    <div slot="form-header">
      <h3 class="headline">{{question.label}}</h3>
    </div>
    <div slot="form-fields">

      <v-container grid-list-xs,sm,md,lg,xl>
        <v-layout row wrap>

          <v-flex xs5>
            <v-card>
              <img
                src="./image-mapping/TODO_REMOVE_human-body.png"
                width="300"
                height="500"
                alt="Oops, missing image!"
                usemap="#questionmap"
              />

              <map name="questionmap">
                <map-area
                  v-for="questionArea in answerMap.areas"
                  :key="questionArea.id"
                  :question="question"
                  :areaAnswer="question.answers.find(
                    (answer) => {return answer.code==questionArea.mapsAnswerCode}
                  )"
                  :questionArea="questionArea"
                  style="background: red;"
                >
                </map-area>
              </map>
            </v-card>
          </v-flex>
          <v-flex xs2>
            <!-- spacer -->
          </v-flex>
          <v-flex xs5>
            <v-card>
              <v-layout column wrap align-center>
                <v-list>
                  <template
                    v-for="answer in question.answers"
                  >
                    <v-list-tile
                      :key="answer.code"
                      @click="submitQuestion(question, answer)"
                    >
                      <v-list-tile-content>
                        <v-list-tile-title>
                          {{answer.label}}
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-layout>
            </v-card>
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
  },
  data() {
    return {
      answerMap: {},
    };
  },
  methods: {
    fetchImageMap() {
      const vueQuestion = this;
      // TODO: should come from an appcontext
      const questionResourceUrl = 'http://localhost:8001';
      fetch(
        `${questionResourceUrl}/imagemap?question_code=${vueQuestion.question.code}` ,
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
          console.log(responseBody);

          // TODO: use abstraction
          vueQuestion.answerMap = responseBody;

        });
      });
    },
    storeAnswer(question, answer) {
      const givenAnswer = new this.$_qap.QuestionAnswerPair(question, answer);
      bus.$emit('storeAnswer', givenAnswer);
    },
    submitQuestion(question, answer) {
      this.storeAnswer(question, answer);
    },
  },
  created() {
    this.fetchImageMap()
  },
  beforeMount() {

  },
};

</script>

<style scoped>
</style>
