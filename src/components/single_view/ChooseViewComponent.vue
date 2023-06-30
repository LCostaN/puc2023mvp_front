<script setup>
  defineProps({
    ownerView: Boolean
  })
</script>

<template>
  <div class="button-row">
    <button :class="{ active: ownerView }" @click="$emit('toggle', true)">Meu Pet</button>
    <button :class="{ active: !ownerView }" @click="$emit('toggle', false)">Lista de Pets</button>
  </div>

</template>

<style scoped>
.button-row {
  display: flex;
  justify-content: space-evenly;
  padding: 0 0 1em;
  margin-bottom: 1em;
  border-bottom: solid 2px blue;
}

.button-row button {
  width: 200px;
  height: 48px;
  border: solid 2px blue;
  border-radius: 8px;
  color: blue;
  background-color: #ffffff55;
}

.button-row button:not(.active):hover {
  background-color: #ffffff77;
  box-shadow: 1px 1px blue;
}

.button-row button.active {
  background-color: blue;
  color: white;
}
</style>
