'use strict'

import axios from 'axios'

const state = {
	user: null
}

const mutations = {
	SET_USER(state, obj) {
		state.user = obj
	},
	CLEAR_USER(state) {
		state.user = null
	}
}

const actions = {
	/**
	 * @param dispatch
	 * @param {Object} data - login, password
	 */
	auth({ dispatch }, data) {
		axios.post('auth', data)
			.then(res => {
				const data = res.data

				if (data && data.token) {
					axios.defaults.headers['Auth'] = data.token
					localStorage.setItem('token', data.token)
					dispatch('getUser')
				}
			})
	},
	getUser({ commit }) {
		axios.get('auth/me')
			.then(res => {
				if (res.data && res.data.user) {
					localStorage.setItem('user', JSON.stringify(res.data.user))
					commit('SET_USER', res.data.user)
				}
			})
	}
}

export default {
	state, mutations, actions
}
