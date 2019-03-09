<template>
  <div class="user-record">
    <answer-summary
      :questionary="questionary"
    >
    </answer-summary>
    <v-snackbar
      v-model="snackbar"
      :top="true"
      :timeout="6000"
      :color="snackbarColor"
    >
      {{ snackbarText }}
      <v-btn
        color="black"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>

import { bus } from '../main';

import AnswerSummary from '../components/summary/AnswerSummary.vue';

export default {
  props:
  {
    user: {
      type: Object,
    },
    questionary: {
      type: Object,
    },
  },
  components:
  {
    'answer-summary': AnswerSummary,
  },
  data() {
    return {
      snackbar: false,
      snackbarText: "",
      snackbarColor: "light-green",
    };
  },
  created() {
    bus.$on('snackbarQuestionarySuccess', (message, created) => {
      this.snackbarText = message;
      this.snackbarColor = created ? "light-green" : "red";
      this.snackbar = true;
    });
  },
  destroyed() {
    bus.$off('snackbarQuestionarySuccess');
  },
};

</script>

<style scoped>
</style>
