const state = {
	isOpen: false,
	group: null
}

const mutations = {
	SET_GROUP(state, obj) {
		state.isOpen = true
		state.group = obj
	},
	SET_USER(state, obj) {
		state.isOpen = true
		state.user = obj
	},
	CLOSE_MODAL(state) {
		state.isOpen = false
		state.group = null
		state.user = null
	}
}

const actions = {
	//
}

export default {
	state, mutations, actions
}
