'use strict'

import router from './router'
import App from './App.vue'
import store from './store'
import './config/axios'
import Vue from 'vue'

// Import styles
import './styles/index'

// Prevent the production tip on Vue startup
Vue.config.productionTip = false

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})
