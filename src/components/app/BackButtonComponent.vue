<script setup>
</script>

<template>
  <button @click="$router.go(-1)"><slot>Voltar</slot></button>
</template>