<script setup>
  defineProps({
    showSchedule: Boolean
  })
</script>

<template>
  <div class="button-row">
    <button :class="{ active: showSchedule }" @click="$emit('toggle', true)">Agendar Banho</button>
    <button :class="{ active: !showSchedule }" @click="$emit('toggle', false)">Ver produtos</button>
  </div>

</template>

<style>
.button-row {
  display: flex;
  justify-content: space-evenly;
  padding: 0 0 0.5em;
  margin-bottom: 0.5em;
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
