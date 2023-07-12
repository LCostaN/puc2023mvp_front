<script setup>
defineProps({ categories: Array, category: String })
defineEmits(['setCategory'])
</script>

<template>
  <div class="category-list button-row">
    <button
      :key="item"
      v-for="item in categories"
      @click="$emit('setCategory', item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<style scoped>
.button-row.category-list {
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;
}
</style>