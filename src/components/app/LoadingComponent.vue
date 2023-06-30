<script setup>
defineProps({
  "size": String
})
</script>

<template>
  <font-awesome-icon :icon="['fas', 'circle-notch']" spin :size="size"/>
</template>