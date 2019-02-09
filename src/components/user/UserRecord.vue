<template>
  <div class="user-record-container">
    <h3>Personenbezogene Daten</h3>
    <div class="input-group mb-2">
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
      />
    </div>
    <div class="input-group mb-2">
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
    </div>
    <div class="input-group mb-2">
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
    </div>
    <div class="input-group mb-2">
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
    </div>
    <div class="input-group mb-2">
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
    </div>
    <div class="input-group mb-2">
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
    </div>
    <input
      class="btn btn-outline-primary mb-2"
      type="button"
      name="commit"
      value="Weiter"
      @click="toQuestionary()"
    />
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
