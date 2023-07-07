<script setup>
import ProductCard from './ProductCardComponent.vue'
defineProps({ products: Array, title: String })
defineEmits(['setCategory'])
</script>

<template>
  <div class="product-list-header">
    <button @click="$emit('setCategory', null)">
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
      Voltar
    </button>
    <span>{{ title }}</span>
    <div></div>
  </div>
  <div class="product-list">
    <ProductCard :key="item" v-for="item in products" :product="item" />
  </div>
</template>

<style scoped>
.product-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
}

.product-list-header > span {
  font-size: larger;
  font-weight: bold;
  padding: 0 30px;
  color: white;
  border-radius: 32px;
  background-color: #0000ff90;
}

.product-list-header > div {
  width: 72px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 240px;
  gap: 20px;
  overflow-y: auto;
  margin-top: 0.5em;
}

button {
  border: none;
  background-color: #2222ff;
  color: white;
  height: 24px;
  width: 72px;
}

button:hover {
  background-color: blue;
  color: white;
}

button:focus {
  background-color: #0000aa;
}
</style>
