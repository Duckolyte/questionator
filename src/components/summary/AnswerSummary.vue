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
          <p
            @click="goToQuestion(questionAnswerPair)"
          >
            <b>{{ questionAnswerPair.question.label }}</b>
          </p>
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
      <div>
        <button
          type="button"
          name="submitQuestionary"
          @click="storeQuestionary()"
        >
          Befragung abschliessen
        </button>
      </div>
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
        });
        const content = await rawResponse;

        console.log(content);
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
