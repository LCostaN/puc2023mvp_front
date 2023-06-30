import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icons
// Solid
import {
  faRightFromBracket,
  faHeart,
  faHandshakeAngle,
  faCircleExclamation,
  faDog,
  faPaw
} from '@fortawesome/free-solid-svg-icons'

library.add([faRightFromBracket, faHeart, faHandshakeAngle, faCircleExclamation, faDog, faPaw])

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
