<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <mentor-filter @filters-changed="updateFilters"></mentor-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadMentors">Refresh</base-button>
        <base-button v-if="!isMentor && !isLoading" to="/register" isLink
          >Register as Mentor</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-if="hasMentors">
        <mentor-item
          v-for="mentor in filteredMentors"
          :key="mentor.id"
          :id="mentor.id"
          :firstName="mentor.firstName"
          :lastName="mentor.lastName"
          :areas="mentor.areas"
          :rate="mentor.hourlyRate"
        ></mentor-item>
      </ul>
      <h3 v-else>No Mentors found.</h3>
    </base-card>
  </section>
</template>
<script>
import MentorItem from '../../components/Mentors/MentorItem.vue';
import MentorFilter from '../../components/Mentors/MentorFilter.vue';
export default {
  components: { MentorItem, MentorFilter },
  computed: {
    isMentor() {
      return this.$store.getters['mentors/isMentor'];
    },
    hasMentors() {
      return !this.isLoading && this.$store.getters['mentors/hasMentors'];
    },
    filteredMentors() {
      // since getters are namespaced, they can't be accessed via this.$store.getters.getter_name
      const mentors = this.$store.getters['mentors/mentors'];
      return mentors.filter((mentor) => {
        if (this.activeFilters.frontend && mentor.areas.includes('frontend')) {
          return true;
        } else if (
          this.activeFilters.backend &&
          mentor.areas.includes('backend')
        ) {
          return true;
        } else if (
          this.activeFilters.career &&
          mentor.areas.includes('career')
        ) {
          return true;
        }
        return false;
      });
    },
  },
  created() {
    this.loadMentors();
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      isLoading: false,
      error: null,
    };
  },
  methods: {
    updateFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadMentors() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('mentors/loadMentors');
      } catch {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
