<script setup>
import { ref } from 'vue'
import ChooseView from '../components/ChooseViewComponent.vue'
import Schedule from '../components/ScheduleComponent.vue'
import PetShop from '../components/PetShopComponent.vue'

const scheduleView = ref(true)

function toggleView(val) {
  scheduleView.value = val
}

</script>

<template>
  <main>
    <ChooseView :showSchedule="scheduleView" @toggle="toggleView" />
    <Transition mode="out-in" appear>
      <Schedule v-if="scheduleView" />
      <PetShop v-else />
    </Transition>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  padding: 0.5em 1em;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
