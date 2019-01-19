'use strict'

import { notification } from '@/prototypes/notification'
import store from '../store'
import axios from 'axios'

// http(s)://example.com/api/*
axios.defaults.baseURL = 'api'

axios.interceptors.response.use(
	(response) => {
		if (response.data) {
			notification.success(response.data.result || response.data.error)
		}

		return response
	},
	(err) => {
		if (!err.response) {
			return Promise.reject(err)
		}

		const { response } = err

		if (response.status === 401) {
			store.commit('profile/CLEAR_ALL')
		}

		if (response.data) {
			notification.error(response.data.error || 'Error')
		}

		return Promise.reject(err)
	}
)

export default (Vue) => Vue.prototype.$axios = axios
