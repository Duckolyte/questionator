<template>
  <div class="question-container">
    <v-card color="primary" dense>
      <v-card-title>
        <v-icon large class="mr-2">mdi-help-circle-outline</v-icon>
        <h3 class="headline">Frage</h3>
      </v-card-title>
    </v-card>
    <v-card>
      <v-card-text>
        <v-form onSubmit="return false">
          <div id="form-header" class="mb-5">
            <slot name="form-header"></slot>
          </div>
          <div id="form-fields">
            <slot name="form-fields"></slot>
          </div>
          <div id="form-controls">
            <slot name="form-controls"></slot>
          </div>
          <div id="form-footer">
            <slot name="form-footer"></slot>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
    <!--
    <v-card color="primary">
      <v-card-title>
        <v-icon large dark>mdi-help-circle-outline</v-icon>
      </v-card-title>
      <v-card-text>
        <v-form onSubmit="return false">
          <div id="form-header">
            <slot name="form-header"></slot>
          </div>
          <div id="form-fields">
            <slot name="form-fields"></slot>
          </div>
          <div id="form-controls">
            <slot name="form-controls"></slot>
          </div>
          <div id="form-footer">
            <slot name="form-footer"></slot>
          </div>
        </v-form>
      </v-card-text>
    </v-card>-->
  </div>
</template>

<script>

export default
{
  components:
  {

  },
  data() {
    return {

    };
  },
};

</script>

<style scoped>


#form-header {
  margin: 2em;
}

.question-container {
  border: #DDD solid 2px;
  background: #FFF;
  border-radius: 10px;
  margin: 0 5em 5em 5em;
  /*padding: 3em;*/
  /*box-shadow: 8px 8px 5px 8px #888888;*/
}

</style>
