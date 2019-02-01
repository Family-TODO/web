const state = {
	component: '',
	data: null
}

const mutations = {
	OPEN_GROUP_DETAIL(state, data) {
		state.component = 'GroupDetailModal'
		state.data = data
	},
	OPEN_USER_EDIT(state, data) {
		state.component = 'UserEditModal'
		state.data = data
	},
	CLOSE_MODAL(state) {
		state.component = ''
		state.data = null
	}
}

const actions = {
	//
}

export default {
	state, mutations, actions
}
