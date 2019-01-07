'use strict'

import router from '../router'
import store from '../store'
import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = 'api'

axios.interceptors.response.use(
	(resp) => {
		return resp
	},
	(err) => {
		if (!err.response) {
			return Promise.reject(err)
		}

		const { response } = err

		if (response.status === 401) {
			router.push({ name: 'dashboard' })
			store.commit('CLEAR_USER')
			localStorage.removeItem('user')
		}

		if (response.data && response.data.message) {
			// TODO Show message
		}

		return Promise.reject(err)
	}
)

Vue.prototype.$axios = axios
