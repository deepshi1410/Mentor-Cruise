<template>
  <button v-if="!isLink" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
      required: false,
    },
    mode: {
      type: String,
      default: '',
      required: false,
    },
    isLink: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>
<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #000;
  border: 1px solid #000;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #2ea857;
  border-color: #2ea857;
}

.flat {
  background-color: transparent;
  color: #000;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #2ea857;
  color: #000;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #d6f3cf;
}
</style>
