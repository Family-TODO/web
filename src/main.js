'use strict'

import baseComponents from '@/components/base'
import router from '@/router'
import App from '@/App.vue'
import store from '@/store'
import 'babel-polyfill'
import '@/config/axios'
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

// Set user from localStorage
store.dispatch('profile/init')

// TODO Connect to websocket??

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})
