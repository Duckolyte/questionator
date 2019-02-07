<template>
  <base-sidebar>
    <div slot="sidebar-header">
      <h3>Zusammenfassung</h3>
    </div>
    <div slot="sidebar-body">
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
    <div slot="sidebar-footer">
    </div>
  </base-sidebar>
</template>

<script>

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

  },
};

</script>

<style scoped>

</style>
