<script setup>
import { RouterView } from 'vue-router'
import Header from './components/app/HeaderComponent.vue'
import Footer from './components/app/FooterComponent.vue'
</script>

<template>
  <body>
    <Header />
    <main class="main">
      <Transition name="route" mode="out-in" appear>
        <RouterView />
      </Transition>
    </main>
    <Footer />
  </body>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
