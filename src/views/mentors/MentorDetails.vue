<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach Out Now!!</h2>
        <base-button isLink :to="contactLink">Contact</base-button>
      </header>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :title="area"
        :type="area"
        :key="area"
      ></base-badge>
      <p>{{ description }}</p></base-card
    >
  </section>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedMentor: null,
    };
  },
  computed: {
    fullName() {
      return `${this.selectedMentor.firstName} ${this.selectedMentor.lastName}`;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    rate() {
      return this.selectedMentor.hourlyRate;
    },
    description() {
      return this.selectedMentor.description;
    },
    areas() {
      return this.selectedMentor.areas;
    },
  },
  created() {
    this.selectedMentor = this.$store.getters['mentors/mentors'].find(
      (mentor) => mentor.id === this.id
    );
  },
};
</script>
