<script setup>
import { computed, onMounted, ref } from 'vue'

// Components
import Loading from '../app/LoadingComponent.vue'
import ProductList from './shop/ProductListComponent.vue'
import CategoryList from './shop/CategoryListComponent.vue'

// Model
import Product from '../../models/Product'

// Service
import service from '../../services/ApiService'

const loading = ref(false)

const products = ref({
  Ração: [
    Product.fromObject({
      name: 'Natural Formula',
      description: 'Feita somente com produtos naturais, ideal para raças mais sensíveis'
    }),
    Product.fromObject({
      name: 'Ração Industrial',
      description:
        'Ração fruto de pesquisa química na produção de ração. ' +
        'Não há um produto natural se quer, mas a ciência diz que é especialmente nutritiva.'
    }),
    Product.fromObject({
      name: 'Ração Vira-lata',
      description: 'A ração mais barata do mercado. Não recomendado para consumo por seres vivos'
    })
  ],
  Brinquedos: [
    Product.fromObject({
      name: 'Bola',
      description:
        'Borracha sintética que massageia a boca do pet ao morder. Tamanhos S, M e G disponíveis',
      count: 200
    }),
    Product.fromObject({
      name: 'Osso de Borracha',
      description:
        'Brinquedo clássico de cães! Temos opções nas cores azul, verde, rosa e branco, além de com ou sem barulho extra!'
    }),
    Product.fromObject({
      name: 'Corda sintética',
      description:
        'Para aqueles que adoram um cabo de guerra, essa corda é feita especialmente para brincar com seu pet' +
        'sem que um dos dois saia machucado! Mas bom senso no uso da força ainda é recomendado.'
    })
  ],
  Acessórios: [
    Product.fromObject({
      name: 'Laço de cabeça',
      description: 'Laço para cabeça, orelhas e outros.'
    }),
    Product.fromObject({
      name: 'Coleira Eu amo meu Dono',
      description:
        'Não deixe que seu pet indigente! O número de telefone do dono e os dados básicos do seu pet são gravados nesta coleira.'
    })
  ],
  Roupas: [
    Product.fromObject({
      name: 'Hello Kitty'
    }),
    Product.fromObject({
      name: 'I am the king'
    }),
    Product.fromObject({
      name: 'Muscles are life'
    }),
    Product.fromObject({
      name: 'I love my owner'
    })
  ],
  Suplementos: [
    Product.fromObject({
      name: 'Vitamina Dogão',
      description: 'Todas as vitaminas que seu Pet precisa.'
    }),
    Product.fromObject({
      name: 'Dog Muscle',
      description:
        'Suplementos para desenvolvimento muscular do pet. ' +
        'Não utilize sem recomendação veterinária.'
    }),
    Product.fromObject({
      name: 'Dogbiótico',
      description:
        'Probiótico canino. Adicione uma dose diária para ' +
        'que seu dog tenha um intestino saudável e eficiente.\n' +
        '**Observação: Redução no tamanho das fezes é normal.'
    })
  ]
})
const category = ref(null)

const selectedProducts = computed(() => products.value[category.value])
const categories = computed(() => Object.keys(products.value))

function loadData() {
  loading.value = true
  service
    .getProducts()
    .then((data) => {
      products.value = new Map(data.map((e) => [e.category || 'Outros', e]))
    })
    .catch(() => {})
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
