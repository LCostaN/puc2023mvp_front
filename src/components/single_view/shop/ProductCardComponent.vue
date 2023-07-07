<script setup>
import Product from '../../../models/Product'

defineProps({ product: Product })
</script>

<template>
  <div class="card product-card">
    <img
      v-if="product.src"
      class="product-image"
      src="@/assets/no-product-image.jpg"
      :alt="product.name"
    />
    <img v-else class="product-image" src="@/assets/no-product-image.jpg" :alt="product.name" />
    <b>{{ product.name }}</b>
    <div class="product-description">{{ product.description }}</div>
    <div class="product-count">
      <span>Estoque atual:</span>
      <span :class="{ 'no-stock': product.count == 0, stock: product.count > 0 }">
        {{ product.count }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  text-align: justify;
  height: 240px;
  width: 100%;
  overflow-y: auto;
}

.product-card img {
  width: 100%;
  height: 80px;
}

.product-description {
  flex: 1;
  font-size: 0.8rem;
  overflow: hidden;
}

.product-count {
  display: flex;
  justify-content: space-between;
}

.product-count > span {
  font-weight: bold;
}

.product-count > span:first-of-type {
  font-size: 0.8rem;
}

.no-stock {
  color: red;
}

.stock {
  color: blue;
}
</style>
