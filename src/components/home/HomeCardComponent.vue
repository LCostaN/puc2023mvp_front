<script setup>
defineProps({
  icon: Array,
  focusIcon: Array,
  text: String,
  route: String
})
</script>

<template>
  <RouterLink class="nav-card card center" :to="route">
    <div>
      <font-awesome-icon :icon="icon" size="4x" />
      <b>{{ text }}</b>
    </div>
  </RouterLink>
</template>

<style scoped>
.nav-card {
  aspect-ratio: 1;
  height: 200px;
  width: 200px;
  font-size: 20px;
  margin: 0 12px 12px 0;
  border: solid 2px blue;
  transition: 0.3s;
}

.card:hover {
  color: blue;
  box-shadow: 2px 2px blue;
}

a {
  color: var(--color);
  text-decoration: none;
  text-align: center;
}

svg {
  display: block;
  margin: 0 auto 8px;
}
</style>
