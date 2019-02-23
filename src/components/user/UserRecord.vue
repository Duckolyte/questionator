<template>
  <div class="user-record-container">
    <v-card>
        <v-toolbar
          color="primary"
          dense
        >
          <h3 class="headline">
            Personenbezogene Daten
          </h3>
        </v-toolbar>
      <v-card-text>
        <div class="input-group mb-2">
          <v-text-field
            v-model="user.lastname"
            label="Name"
            clearable
            maxlength="20"
          >
          </v-text-field>
        </div>
        <div class="input-group mb-2">
          <v-text-field
            v-model="user.firstname"
            label="Vorname"
            clearable
            maxlength="20"
          >
          </v-text-field>
        </div>
        <div class="input-group mb-2">
          <v-radio-group v-model="user.gender" row>
            <v-radio label="Männlich" value="male"></v-radio>
            <v-radio label="Weiblich" value="female"></v-radio>
            <v-radio label="Divers" value="diverse"></v-radio>
          </v-radio-group>
        </div>
        <div class="input-group mb-2">
          <v-text-field
            v-model="user.dateOfBirth"
            label="Geburtsdatum"
            clearable
          >
          </v-text-field>
        </div>
        <div class="input-group mb-2">
          <v-text-field
            v-model="user.caseId"
            label="Fall ID"
            clearable
          >
          </v-text-field>
        </div>
        <div class="input-group mb-2">
          <v-text-field
            v-model="user.patientId"
            label="Patienten ID"
            clearable
          >
          </v-text-field>
        </div>
        <v-btn
          color="primary"
          @click="toQuestionary()"
        >
          Weiter
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  props: {
    user: {
      type: Object,
    },
  },
  components: {

  },
  data() {
    return {
      /*
      currentUser: {
        lastname: "",
        firstname: "",
        gender: "",
        dateOfBirth:"",
        patientId: "",
        caseId: "",
      }
      */
    };
  },
  computed: {

  },
  methods: {
    toQuestionary() {
      this.$router.push('/question');
    },
  },
};

</script>

<style scoped>

</style>
