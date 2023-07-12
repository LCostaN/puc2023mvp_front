<script setup></script>

<template>
  <div class="header">
    <span class="header-title">
      Dog Care
      <font-awesome-icon
        :icon="['fas', 'paw']"
        size="lg"
        beat
        style="--fa-animation-iteration-count: 2"
      />
    </span>
  </div>
</template>

<style scoped>
.header {
  height: 4em;
  display: flex;
  align-items: center;
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
