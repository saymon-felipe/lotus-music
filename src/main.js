import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalMixin from './mixins/global'
import { vScrollReveal } from './directives/scrollReveal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faGraduationCap,
  faMusic,
  faUsers,
  faDollarSign,
  faStar,
  faCalendar,
  faPlay,
} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faMusic, faUsers, faGraduationCap, faDollarSign, faStar, faCalendar, faPlay)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.directive('scroll-reveal', vScrollReveal)

app.mixin(globalMixin)

app.use(router)

app.mount('#app')
