<script setup></script>

<template>
  <form class="login-wrapper card center">
    <h1>Login</h1>
    <a href="#" @click="$emit('toggle')">Cadastrar</a>
  </form>
</template>

<style scoped>
.login-wrapper {
  width: 50%;
  max-width: 500px;
}
</style>
