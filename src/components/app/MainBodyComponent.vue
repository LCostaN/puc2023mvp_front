<script setup>
import { ref } from 'vue'
import ChooseView from '../single_view/ChooseViewComponent.vue'
import Schedule from '../single_view/ScheduleComponent.vue'
import PetShop from '../single_view/PetShopComponent.vue'

const scheduleView = ref(true)

function toggleView(val) {
  scheduleView.value = val
}

</script>

<template>
  <main>
    <ChooseView :scheduleView="scheduleView" @toggle="toggleView" />
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
