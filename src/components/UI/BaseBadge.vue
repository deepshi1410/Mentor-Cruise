<template>
  <span :class="type" class="badge">
    {{ text }}
  </span>
</template>
<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>
<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #4bc280;
  color: white;
}

.backend {
  background-color: #149171;
  color: white;
}

.career {
  background-color: #129c5c;
  color: white;
}
</style>
