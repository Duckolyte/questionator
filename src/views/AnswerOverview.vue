<template>
  <div class="user-record">
    <answer-summary
      :questionary="questionary"
    >
    </answer-summary>
  </div>
</template>

<script>

import AnswerSummary from '../components/summary/AnswerSummary.vue';

export default {
  props:
  {
    user: {
      type: Object,
    },
    questionary: {
      type: Object,
    }
  },
  components:
  {
    'answer-summary': AnswerSummary,
  },
  data() {
    return {
    };
  },
};

</script>

<style scoped>
</style>
