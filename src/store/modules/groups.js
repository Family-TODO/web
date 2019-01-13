import axios from 'axios'

const state = {
	list: []
}

const mutations = {
	SET_GROUPS(state, arr) {
		state.list = arr
	},
	CLEAR_GROUPS(state) {
		state.list = null
	}
}

const actions = {
	fetchList({ commit }, params) {
		commit('CLEAR_GROUPS')

		axios.get('groups', {
			params
		})
			.then(res => {
				commit('SET_GROUPS', res.data.groups)
			})
	}
}

export default {
	state, mutations, actions
}
