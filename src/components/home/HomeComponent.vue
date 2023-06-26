<script setup>
import HomeCard from './HomeCardComponent.vue'
</script>

<template>
  <div class="home-container center">
    <div class="grid-container">
      <HomeCard :icon="['fas', 'dog']" text="Passear" route="/walk" />
      <HomeCard :icon="['fas', 'heart']" text="Adotar" route="/adopt" />
      <HomeCard :icon="['fas', 'handshake-angle']" text="Doar Pet" route="/for-adoption" />
      <HomeCard :icon="['fas', 'circle-exclamation']" text="Denunciar" route="/denounce" />
    </div>
  </div>
</template>

<style scoped>
.home-container {
  height: 100%;
}

.grid-container {
  display: flex;
  max-width: 500px;
  max-height: 500px;
  flex-wrap: wrap;
}
</style>
