<script setup>
defineProps({
  size: String,
})
</script>

<template>
  <div class="loading-container">
    <font-awesome-icon :icon="['fas', 'circle-notch']" spin :size="size" />
  </div>
</template>
