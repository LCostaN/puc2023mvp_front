<script setup>
import { computed, onMounted, ref } from 'vue'

// Components
import Loading from './LoadingComponent.vue'
import ProductList from './shop/ProductListComponent.vue'
import CategoryList from './shop/CategoryListComponent.vue'

// Model
import Product from '../models/Product'

// Service
import service from '../services/apiService'

const loading = ref(false)

const products = ref({})
const category = ref(null)

const selectedProducts = computed(() => products.value[category.value])
const categories = computed(() => Object.keys(products.value))

function loadData() {
  loading.value = true
  service
    .getProducts()
    .then((data) => {
      const map = {}

      for (const p of data.products) {
        const product = Product.fromObject(p)
        
        if(!map[product.category]) map[product.category] = []

        map[product.category] = [...map[product.category], product]
      }

      products.value = map
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(loadData)

function setCategory(val) {
  category.value = val
}
</script>

<template>
  <div v-if="loading" class="center">
    <Loading size="6x" />
  </div>
  <div v-else class="shop-container">
    <CategoryList v-if="!category" :categories="categories" @set-category="setCategory" />
    <ProductList
      v-else
      :products="selectedProducts"
      @set-category="setCategory"
      :title="category"
    />
  </div>
</template>

<style scoped></style>
