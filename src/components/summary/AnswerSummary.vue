<template>
  <v-layout
    align-center
    justify-center
    column
  >
    <v-flex xs12>
      <v-card>
        <v-toolbar color="primary">
          <v-icon class="mr-2">mdi-file-check</v-icon>
          <h3 class="subheading">Übersicht</h3>
        </v-toolbar>
      </v-card>
      <v-card>
        <v-list two-line content>
          <template
            v-for="questionAnswerPair in questionary.questionAnswerPairs"
          >
            <v-list-tile
              :key="questionAnswerPair.id"
              @click="goToQuestion(questionAnswerPair)"
            >
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ questionAnswerPair.question.label }}
                </v-list-tile-title>
                <v-list-tile-sub-title
                  v-if="questionAnswerPair.answer.value"
                >
                  {{ questionAnswerPair.answer.value }}
                </v-list-tile-sub-title>
                <v-list-tile-sub-title v-else>
                  {{ questionAnswerPair.answer.label }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
      <v-card>
        <v-btn
          color="secondary"
          @click="storeQuestionary()"
        >
          Befragung abschliessen
        </v-btn>
      </v-card>
    </v-flex>
  </v-layout>


</template>

<script>

import { bus } from '../../main';

export default
{
  props: {
    questionary: {
      type: Object,
    },
  },
  components: {
  },
  data() {
    return {

    };
  },
  methods: {
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
        }).then((response) => {
          response.text().then((text) => {
            const content = JSON.parse(text);

            console.log(content);
            bus.$emit(
              'snackbarQuestionarySuccess',
              content.msg,
              content.created
            );
            //vueQuestion.questionary = {};
            //vueQuestion.$router.push('/');
          });
        });
      })();
    },
    goToQuestion(questionAnswerPair) {
      console.log('go to question');
      this.$router.push(
        '/question?code='+
        questionAnswerPair.question.code +
        '&pairid=' + questionAnswerPair.id
      );
    },
  },
};

</script>

<style scoped>

</style>
