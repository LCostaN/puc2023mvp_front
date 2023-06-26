import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icons
// Solid
import { faRightFromBracket, faHeart, faHandshakeAngle, faCircleExclamation, faDog } from '@fortawesome/free-solid-svg-icons'

library.add(faRightFromBracket)
library.add(faHeart)
library.add(faHandshakeAngle)
library.add(faCircleExclamation)
library.add(faDog)


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
