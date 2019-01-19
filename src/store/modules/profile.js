'use strict'

import { notification } from '@/prototypes/notification'
import router from '@/router'
import axios from 'axios'

// localStorage
const STORE_TOKEN = 'token'
const STORE_USER = 'user'

const state = {
	loading: false,
	user: null
}

const mutations = {
	SET_USER(state, obj) {
		state.user = obj
	},
	SET_LOADING(state, toggle) {
		state.loading = toggle
	},
	CLEAR_ALL(state) {
		router.push({ name: 'auth' })

		// Clear data from axios
		axios.defaults.headers['Auth'] = null

		// Clear data from store
		state.user = null

		// Clear data from localStorage
		localStorage.removeItem(STORE_TOKEN)
		localStorage.removeItem(STORE_USER)
	}
}

const actions = {
	/**
	 * Get data from localStorage and set init config.
	 */
	init({ commit }) {
		const storageUserData = localStorage.getItem(STORE_USER)
		const token = localStorage.getItem(STORE_TOKEN)

		if (!storageUserData || !token) {
			return router.push({ name: 'auth' })
		}

		try {
			const user = JSON.parse(storageUserData)

			axios.defaults.headers['Auth'] = token
			commit('SET_USER', user)

		} catch (e) {
			localStorage.removeItem(STORE_USER)
			localStorage.removeItem(STORE_TOKEN)
			router.push({ name: 'auth' })
		}
	},
	auth({ dispatch, commit }, data) {
		commit('SET_LOADING', true)

		axios.post('auth', data)
			.then(async res => {
				const data = res.data

				if (data && data.token) {
					axios.defaults.headers['Auth'] = data.token
					localStorage.setItem(STORE_TOKEN, data.token)
					await dispatch('getUser')
				} else {
					notification.error(res.data.error || 'Error')
				}

				commit('SET_LOADING', false)
			})
			.catch(() => {
				notification.error('The server returned an error')
				commit('SET_LOADING', false)
			})
	},
	logout({ commit }) {
		commit('SET_LOADING', true)

		axios.post('auth/logout')
			.then(res => {
				if (res.data && res.data.result) {
					commit('CLEAR_ALL')
					notification.success('Success')
				} else {
					notification.error(res.data.error || 'Error')
				}

				commit('SET_LOADING', false)
			})
			.catch(() => {
				notification.error('The server returned an error')
				commit('SET_LOADING', false)
			})
	},
	getUser({ commit }) {
		axios.get('auth/me')
			.then(res => {
				if (res.data && res.data.user) {
					localStorage.setItem(STORE_USER, JSON.stringify(res.data.user))
					commit('SET_USER', res.data.user)
				}
			})
	}
}

export default {
	state, mutations, actions
}
