'use strict'

import router from '../router'
import store from '../store'
import axios from 'axios'

// http(s)://example.com/api/*
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

			// Clear data from axios
			axios.defaults.headers['Auth'] = null

			// Clear data from store
			store.commit('profile/CLEAR_USER')

			// Clear data from localStorage
			localStorage.removeItem('token')
			localStorage.removeItem('user')
		}

		if (response.data && response.data.message) {
			// TODO Show message
		}

		return Promise.reject(err)
	}
)

export default (Vue) => Vue.prototype.$axios = axios
