'use strict'

import '@babel/polyfill'
import baseComponents from '@/components/base'
import prototypes from '@/prototypes'
import router from '@/router'
import App from '@/App.vue'
import store from '@/store'
import Vue from 'vue'

// Import styles
import '@/styles/index'

// Prevent the production tip on Vue startup
Vue.config.productionTip = false

/**
 * Install global Base components
 * @var {Array} baseComponents
 * @example BaseInput
 */
baseComponents.forEach(component => {
	Vue.component(component.name, component)
})

/**
 * Install global prototypes
 * @var {Array} prototypes
 * @example Vue.$axios | this.$axios
 */
prototypes.forEach(prototype => {
	Vue.use(prototype)
})

// Set user from localStorage
store.dispatch('profile/init')

// TODO Connect to websocket??

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})
