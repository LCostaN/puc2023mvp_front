<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isLogged = ref(false)

function logout() {
  isLogged.value = true
}
</script>

<template>
  <div class="header">
    <span class="header-title">Pet Community</span>
    <nav>
      <RouterLink to="/" v-if="$route.name == 'Auth'">Home</RouterLink>
      <div v-else>
        <a href="#" @click.prevent="logout()" v-if="isLogged">
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
        </a>
        <RouterLink v-else to="/auth">Login</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.header {
  height: 4em;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: var(--dark-bg);
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

nav a:last-child {
  margin-right: 20px;
}
</style>
