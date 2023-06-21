<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header">
    <span class="header-title">Pet Community</span>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Cadastro</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.header {
  max-height: 4em;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: slategray;
  color: whitesmoke;
}

.header-title {
  min-width: 300px;
  font-size: 1.3rem;
  padding: 0 2rem;
}

.logo {
  display: inline-block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  display: inline-block;
  font-size: 1rem;
  text-align: end;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: whitesmoke;
  text-decoration: none;
}

nav a:hover {
  color: yellow;
}

nav a:first-of-type {
  border: 0;
}

</style>
