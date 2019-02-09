<template>
  <div class="">
    <div>
      <h3>Zusammenfassung</h3>
    </div>
    <div>
      <template
      v-for="questionAnswerPair in questionary.questionAnswerPairs"
      >
      <div
      :key="questionAnswerPair.id"
      >
      <p><b>{{ questionAnswerPair.question.label }}</b></p>
      <p
      v-if="questionAnswerPair.answer.value"
      >
      {{ questionAnswerPair.answer.value }}
    </p>
    <p v-else>
      {{ questionAnswerPair.answer.label }}
    </p>
  </div>
</template>
</div>
  </div>
</template>

<script>

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

  },
};

</script>

<style scoped>

</style>
