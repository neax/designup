import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faBars, faAngleDown, faCube } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes, faBars, faAngleDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)
