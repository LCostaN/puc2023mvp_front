<script setup>
import Header from './components/app/HeaderComponent.vue'
import MainBody from './components/app/MainBodyComponent.vue'
import Footer from './components/app/FooterComponent.vue'
</script>

<template>
  <body>
    <Header />
    <MainBody />
    <Footer />
  </body>
</template>

<style scoped>
  body {
    display: flex;
    flex-direction: column;
  }
</style>