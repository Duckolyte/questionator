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
          <!--
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input
            class="form-control"
            type="text"
            placeholder="Muster"
            name="lastname"
            required
            v-model:value="user.lastname"
          />-->
        </div>
        <div class="input-group mb-2">
          <v-text-field
            v-model="user.firstname"
            label="Vorname"
            clearable
            maxlength="20"
          >
          </v-text-field>
          <!--
          <div class="input-group-prepend">
            <span class="input-group-text">Vorname</span>
          </div>
          <input
            class="form-control"
            type="text"
            aria-label="password"
            placeholder="Hans"
            name="firstname"
            required
            v-model:value="user.firstname"
          />
          -->
        </div>
        <div class="input-group mb-2">
          <v-radio-group v-model="user.gender" row>
            <v-radio label="Männlich" value="male"></v-radio>
            <v-radio label="Weiblich" value="female"></v-radio>
            <v-radio label="Divers" value="diverse"></v-radio>
          </v-radio-group>
          <!--
          <div class="input-group-prepend">
            <span class="input-group-text">Geschlecht</span>
          </div>
          <input
            class="form-control"
            type="text"
            placeholder="m, w, o"
            name="gender"
            required
            v-model:value="user.gender"
          />
          -->
        </div>
        <div class="input-group mb-2">
          <v-text-field
            v-model="user.dateOfBirth"
            label="Geburtsdatum"
            clearable
          >
          </v-text-field>
          <!--
          <div class="input-group-prepend">
            <span class="input-group-text">Geburtsdatum</span>
          </div>
          <input
            class="form-control"
            type="date"
            name="date_of_birth"
            required
            v-model:value="user.dateOfBirth"
          />
          -->
        </div>
        <div class="input-group mb-2">
          <v-text-field
            v-model="user.caseId"
            label="Fall ID"
            clearable
          >
          </v-text-field>
          <!--
          <div class="input-group-prepend">
            <span class="input-group-text">Fall ID</span>
          </div>
          <input
            class="form-control"
            type="number"
            placeholder="id"
            name="case_id"
            v-model:value="user.caseId"
          />
          -->
        </div>
        <div class="input-group mb-2">
          <v-text-field
            v-model="user.patientId"
            label="Patienten ID"
            clearable
          >
          </v-text-field>
          <!--
          <div class="input-group-prepend">
            <span class="input-group-text">Patienten ID</span>
          </div>
          <input
            class="form-control"
            type="number"
            placeholder="id"
            name="patient_id"
            v-model:value="user.patientId"
          />
          -->
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
