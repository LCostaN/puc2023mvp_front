<script setup>
  import HomeCard from './HomeCardComponent.vue'
</script>

<template>
  <div class="container">
    <HomeCard :icon="['fas', 'dog']" text="Passear" route="/walk"/>
    <HomeCard :icon="['fas', 'heart']" text="Adotar" route="/adopt"/>
    <HomeCard :icon="['fas', 'handshake-angle']" text="Doar Pet" route="/for-adoption"/>
    <HomeCard :icon="['fas', 'circle-exclamation']" text="Denunciar" route="/denounce"/>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 20px;
  grid-auto-rows: 1fr;
  grid-auto-columns: 2fr;
}
</style>
