'use strict'

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
			store.commit('profile/CLEAR_ALL')
		}

		if (response.data && response.data.message) {
			// TODO Show message
		}

		return Promise.reject(err)
	}
)

export default (Vue) => Vue.prototype.$axios = axios
