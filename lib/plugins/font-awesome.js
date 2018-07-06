import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faBars, faCaretDown, faCube } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes, faBars, faCaretDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)
