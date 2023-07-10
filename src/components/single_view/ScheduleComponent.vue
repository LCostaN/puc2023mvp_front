<script setup>
import { onMounted, ref } from 'vue'

// Components
import Loading from '../app/LoadingComponent.vue'

// Models
import Calendar from '../../models/Calendar'
import Pet from '../../models/Pet'

// Service
import service from '../../services/ApiService'

const loading = ref(false)

const pet = ref(new Pet())
const selectedDate = ref(null)
const fileInput = ref(null)
const image = ref(null)

const calendar = ref(null)

const errors = ref({ date: false })

function formatDate(date) {
  if (!date) return ''
  var formated = date.toLocaleString('pt-BR').split(', ')
  return formated[0]
}

function formatTime(date) {
  if (!date) return ''
  var formated = date.toLocaleString('pt-BR').split(', ')
  return formated[1].slice(0, 5)
}

function formatDateTime(date) {
  return formatDate(date) + ' ' + formatTime(date)
}

function loadData() {
  loading.value = true
  service
    .getSchedules()
    .then((data) => {
      const dates = data.schedules.map((val) => {
        const dateParts = val.date.split('/')
        const yearTime = dateParts[2].split(' ')
        const timeParts = yearTime[1].split(':')

        const year = yearTime[0]
        const month = dateParts[1] - 1
        const day = dateParts[0]
        const hour = timeParts[0]
        const minute = timeParts[1]

        return new Date(year, month, day, hour, minute)
      })
      calendar.value = new Calendar(dates)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(loadData)

function onSelectDate(date) {
  selectedDate.value = date
  errors.value.date = false
}

function chooseFile() {
  fileInput.value.click()
}

function previewImage(event) {
  var input = event.target
  if (input.files) {
    var reader = new FileReader()
    reader.onload = (e) => {
      pet.value.src = e.target.result
    }
    image.value = input.files[0]
    reader.readAsDataURL(image.value)
  }
}

function handleError(error) {
  alert(
    'Ops! Parece que não conseguimos registrar este horário no momento.' +
      ' Tente outro horário ou tente novamente mais tarde.'
  )
  console.error('Error:', error)
}

async function onSubmit(e) {
  e.preventDefault()
  if (selectedDate.value == null) errors.value.date = true

  if (Object.values(errors.value).find((val) => val)) {
    return
  }

  try {
    const data = JSON.stringify({
      ...pet.value,
      date: formatDateTime(selectedDate.value),
      file: image.value,
    })

    loading.value = true
    service
      .postSchedule(data)
      .then((response) => {
        if (response.status != 200) return handleError(response.statusText)
        alert(
          'Registrado com sucesso! Compareça no endereço ' +
            '<Rua lugar nenhum, 1000, Sorocaba - SP> ' +
            'com 15 minutos de antecedência.'
        )

        calendar.value.addSchedule(selectedDate.value)
        pet.value = new Pet()
        selectedDate.value = null
        image.value = null
      })
      .catch((error) => {
        handleError(error)
      })
      .finally(() => {
        loading.value = false
      })
  } catch (error) {
    handleError(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="my-pet-container">
    <form id="form" class="card" method="post" @submit="onSubmit">
      <Loading size="6x" v-if="loading" />
      <div v-else>
        <img :src="pet.src" alt="My Pet Image" width="300" height="400" @click="chooseFile" /><br />
        <input v-model.trim="pet.name" placeholder="Nome do Pet" required />
        <span class="dateSpan">
          <b> Data </b>
          <span v-show="selectedDate"
            >{{ formatDate(selectedDate) }} - {{ formatTime(selectedDate) }}</span
          >
          <span class="error" v-show="errors.date">Selecione uma vaga para continuar</span>
        </span>
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          @change="previewImage"
          style="display: none"
        />
        <input type="submit" value="Salvar" />
      </div>
    </form>
    <div class="card history-card">
      <h1 class="header">Horários disponíveis</h1>
      <div class="calendar-grid" v-if="calendar">
        <ul :key="day" v-for="day in calendar.dates">
          <b>{{ formatDate(day[1][0]).slice(0, 5) }}</b>
          <li
            :key="item"
            :class="{ active: selectedDate == item }"
            v-for="item in day[1]"
            @click="() => onSelectDate(item)"
          >
            <b>{{ formatTime(item) }}</b>
          </li>
        </ul>
      </div>
      <span v-else>Nenhum horário disponível nos próximos 7 dias</span>
    </div>
  </div>
</template>

<style scoped>
.calendar-grid {
  max-height: 440px;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px 10px;
  overflow-y: scroll;
  overflow-x: hidden;
}

ul {
  margin: 0;
  padding: 0;
  text-align: center;
}

ul:last-child {
  margin-right: 10px;
}

ul li {
  padding: 10px 12px;
  background-color: white;
  border-radius: 8px;
  display: block;
  text-align: center;
  transition: 0.2s;
  font-size: large;
  margin-top: 5px;
  margin-bottom: 5px;
}

ul li.active {
  background-color: blue !important;
  color: white;
}

ul li:hover {
  background-color: #cfcfff;
}

ul > b {
  font-size: 1.5rem;
}

.dateSpan {
  display: flex;
  margin-bottom: 8px;
}

.dateSpan b {
  margin-right: 0.5em;
}

.dateSpan span {
  flex: 1;
  text-align: left;
}

.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 300px;
}
.my-pet-container {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

.history-card {
  flex: 1 1 360px;
}

.header {
  background-color: #ddd;
  padding-left: 0.5em;
}

form {
  margin: 0 1em 1em 0;
  max-height: 550px;
  text-align: center;
}

form input[type='submit'] {
  border: none;
  border-radius: 8px;
  background-color: #3333ff;
  color: white;
  padding: 10px;
}

form input[type='submit']:hover {
  background-color: blue;
}

form input[type='submit']:focus {
  background-color: #0000ee;
}

label {
  display: flex;
  font-weight: bold;
}

label input {
  flex: 1;
  margin-left: 1em;
}

input {
  width: 100%;
}

@media only screen and (max-width: 740px) {
  form.card {
    margin: 0 auto 1em;
  }

  .history-card {
    min-width: 300px;
    flex: 1 1 480px;
  }

  .calendar-grid {
    overflow: auto;
  }
}
</style>
