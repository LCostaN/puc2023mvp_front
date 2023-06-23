<script setup>
defineProps({
  icon: Array,
  text: String,
  route: String
})
</script>

<template>
  <RouterLink class="card center" :to="route">
    <font-awesome-icon :icon="icon" />
    {{ text }}
  </RouterLink>
</template>

<style scoped>
.card {
  aspect-ratio: 1;
  margin: 0 12px 12px 0;
}

.card:hover {
  background-color: #dfdfdf;
  color: blue;
}

a {
  color: var(--color);
  text-decoration: none;
}
</style>
