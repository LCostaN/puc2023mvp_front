<script setup>
import { ref } from 'vue'
import Login from '../components/auth/LoginComponent.vue'
import Register from '../components/auth/RegisterComponent.vue'

const login = ref(true)

function toggleView() {
  login.value = !login.value
}
</script>

<template>
  <Transition mode="out-in">
    <Login v-if="login" @toggle="toggleView" />
    <Register v-else @toggle="toggleView" />
  </Transition>
</template>