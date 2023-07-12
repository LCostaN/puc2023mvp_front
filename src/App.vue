<script setup>
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
import MainView from './views/MainView.vue'
</script>

<template>
  <body>
    <Header />
    <MainView />
    <Footer />
  </body>
</template>

<style scoped>
  body {
    display: flex;
    flex-direction: column;
  }
</style>