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
      />
    </div>
    <div class="input-group mb-2">
      <div class="input-group-prepend">
        <span class="input-group-text">Fall ID</span>
      </div>
      <input
        class="form-control"
        type="number"
        placeholder="123456789"
        name="case_id"
        required
      />
    </div>
    <input
      class="btn btn-outline-primary mb-2"
      type="submit"
      name="commit"
      value="Zum Fragebogen"
    />
  </div>
</template>

<script>

export default {

  components: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {

  },
};

</script>

<style scoped>

</style>
