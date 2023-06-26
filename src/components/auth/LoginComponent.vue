<script setup>
import { ref } from 'vue'

const email = ref(null)
const pass = ref(null)
</script>

<template>
  <form class="form-wrap card">
    <div class="form-header"><h1>Bem vindo!</h1></div>
    <div class="form-control">
      <label for="email">E-mail</label>
      <input id="email" v-model="email" />
    </div>
    <div class="form-control">
      <label for="pass">Senha</label>
      <input type="password" id="pass" v-model="pass" />
    </div>
    <div class="submit-wrap">
      <div><input type="submit" value="Entrar" /></div>
      <div><a href="#" @click="$emit('toggle')">Cadastrar</a></div>
    </div>
  </form>
</template>
