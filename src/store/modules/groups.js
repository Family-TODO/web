import axios from 'axios'

const state = {
	list: [],
	loading: true
}

const mutations = {
	SET_GROUPS(state, arr) {
		state.list = arr
	},
	SET_LOADING(state, toggle) {
		state.loading = toggle
	}
}

const actions = {
	fetchList({ commit }, params) {
		commit('SET_LOADING', true)

		axios.get('groups', {
			params
		})
			.then(res => {
				commit('SET_LOADING', false)
				commit('SET_GROUPS', res.data.groups)
			})
			.catch(() => {
				commit('SET_LOADING', false)
			})
	}
}

export default {
	state, mutations, actions
}
