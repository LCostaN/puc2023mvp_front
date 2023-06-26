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

<style>
.submit-wrap {
  margin-top: 30px;
}

.submit-wrap input[type='submit'] {
  padding: 8px 40px;
}

.submit-wrap > div {
  width: 100%;
  text-align: center;
}

.submit-wrap > div:first-child {
  margin-bottom: 4px;
}

.form-wrap {
  width: 400px;
  max-width: 600px;
  margin: auto;
}

.form-header {
  text-align: center;
  margin-bottom: 20px;
}

.form-control {
  display: flex;
  width: fit-content;
  margin: 0 auto 12px;
}

.form-control > label {
  margin-right: 8px;
  flex: 1 1 60px;
}

.form-control > input {
  border: 2px solid blue;
  border-radius: 8px;
}

input[type=submit] {
  border: solid 2px blue;
  border-radius: 8px;
  color: blue;
  font-weight: 700;
  transition: 0.3s;
}

input[type=submit]:hover {
  background-color: blue;
  color: white;
}
</style>
