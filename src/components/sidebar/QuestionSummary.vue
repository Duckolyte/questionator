<template>
  <base-sidebar>
    <div slot="sidebar-header">

    </div>
    <div slot="sidebar-body">
        <!--
        <v-btn
          absolute
          dark
          fab
          right
          color="secondary"
          @click.stop="drawer = !drawer"
        >
          <v-icon>chevron_left</v-icon>
        </v-btn>
        -->
        <!--
        <v-list-tile
          @click.stop=""
        >
          <h class="title">Zusammenfassung</h>
          <v-spacer></v-spacer>
          <v-list-tile-action>
            <v-icon>chevron_left</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        -->

      <v-card>
        <v-toolbar color="primary">

          <v-icon class="mr-2">mdi-pencil-outline</v-icon>

          <h3 class="subheading">Fragen bearbeiten</h3>
          <!--
          <v-spacer></v-spacer>
          <v-list-tile-action
            @click.stop="drawer != drawer"
          >
            <v-icon>chevron_left</v-icon>
          </v-list-tile-action>
          -->
        </v-toolbar>
      </v-card>

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
    </div>
    <div slot="sidebar-footer">
    </div>
  </base-sidebar>
</template>

<script>

import { bus } from '../../main';

import BaseSidebar from './BaseSidebar.vue';

export default
{
  props: {
    questionary: {
      type: Object,
    },
  },
  components: {
    'base-sidebar': BaseSidebar,
  },
  data() {
    return {

    };
  },
  methods: {
    goToQuestion(questionAnswerPair) {
      console.log('pair.question.code then pair.id');
      console.log(questionAnswerPair.question.code);
      console.log(questionAnswerPair.id);
      bus.$emit('goToQuestionInQuestionary', questionAnswerPair)
      /*
      this.$router.push(
        '/question?code='+
        questionAnswerPair.question.code +
        '&pairid=' + questionAnswerPair.id
      );
      */
    },
  },
};

</script>

<style scoped>

</style>
