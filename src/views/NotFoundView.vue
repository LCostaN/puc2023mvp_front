<script setup>

</script>

<template>
  <div class="card">
    <h1>Ops...</h1>
    <h4>Página não encontrada</h4>
    <button @click="$router.go(-1)">Voltar</button>
  </div>
</template>

<style scoped>
  .card button {
    padding: 1em 3em;
    margin: 40px 2em 0 2em;
  }
</style>
