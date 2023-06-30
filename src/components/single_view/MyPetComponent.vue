<script setup>
import { ref } from 'vue'

const petSrc = ref('https://placehold.co/300x400')
const petName = ref('')

function onFileChosen(e, t) {
  console.log(e)
  console.log(t)
}

</script>

<template>
  <div class="my-pet-container">
    <form class="card">
      <img class="img" :src="petSrc" alt="My Pet Image" width="300" height="400" @click="onFileChosen"/><br/>
      <label>
        Nome
        <input v-model="petName" />
      </label>
    </form>
    <div class="card history-card">
      <h1 class="history-header">Histórico de passeios</h1>
      <div>
        <ul>
          <li>19/01/2022 19:10 - Passeado por Igor</li>
          <li>19/02/2022 19:10 - Passeado por Igor</li>
          <li>19/03/2022 19:10 - Passeado por Igor</li>
          <li>19/04/2022 19:10 - Passeado por Igor</li>
          <li>19/05/2022 19:10 - Passeado por Igor</li>
          <li>19/06/2022 19:10 - Passeado por Igor</li>
          <li>19/07/2022 19:10 - Passeado por Igor</li>
          <li>19/08/2022 19:10 - Passeado por Igor</li>
          <li>19/09/2022 19:10 - Passeado por Igor</li>
          <li>19/10/2022 19:10 - Passeado por Igor</li>
          <li>19/11/2022 19:10 - Passeado por Igor</li>
          <li>19/12/2022 19:10 - Passeado por Igor</li>
          <li>19/01/2023 19:10 - Passeado por Igor</li>
          <li>19/02/2023 19:10 - Passeado por Igor</li>
          <li>19/03/2023 19:10 - Passeado por Igor</li>
          <li>19/04/2023 19:10 - Passeado por Igor</li>
          <li>19/05/2023 19:10 - Passeado por Igor</li>
          <li>19/06/2023 19:10 - Passeado por Igor</li>
          <li>19/07/2023 19:10 - Passeado por Igor</li>
          <li>19/08/2023 19:10 - Passeado por Igor</li>
          <li>19/09/2023 19:10 - Passeado por Igor</li>
          <li>19/10/2023 19:10 - Passeado por Igor</li>
          <li>19/11/2023 19:10 - Passeado por Igor</li>
          <li>19/12/2023 19:10 - Passeado por Igor</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-pet-container {
  display: flex;
  height: 530px;
  overflow: hidden;
}

.history-card {
  flex: 1;
  margin-left: 1em;
}

.history-card > div {
  overflow: auto;
}

.history-header {
  background-color: #ddd;
  padding-left: 0.5em;
}

label {
  display: flex;
  font-weight: bold;
}

label input {
  flex: 1;
  margin-left: 1em;
}

.img {
  height: 400;
  width: 300;
}
</style>
