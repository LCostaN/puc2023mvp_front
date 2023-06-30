<script setup>
import { ref } from 'vue'
import ChooseView from '../single_view/ChooseViewComponent.vue';
import MyPet from '../single_view/MyPetComponent.vue';
import PetList from '../single_view/PetListComponent.vue';

const isOwner = ref(true)

function toggleView(val) {
  isOwner.value = val
}
</script>

<template>
  <main>
    <ChooseView :ownerView="isOwner" @toggle="toggleView" />
    <Transition mode="out-in" appear>
      <MyPet v-if="isOwner" />
      <PetList v-else />
    </Transition>
  </main>
</template>
