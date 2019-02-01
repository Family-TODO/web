import axios from 'axios'

const state = {
	list: {},
	loading: false
}

const mutations = {
	SET_GROUPS(state, arr) {
		state.list = arr
	},
	ADD_GROUP(state, obj) {
		state.list[obj.id] = obj
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
				const groups = {}

				res.data.groups.forEach(group => {
					groups[group.id] = group
				})

				commit('SET_LOADING', false)
				commit('SET_GROUPS', groups)
			})
			.catch(() => {
				commit('SET_LOADING', false)
			})
	}
}

export default {
	state, mutations, actions
}
