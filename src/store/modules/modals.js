const state = {
	isOpen: false,
	group: null
}

const mutations = {
	SET_GROUP(state, obj) {
		state.isOpen = true
		state.group = obj
	},
	CLOSE_MODAL(state) {
		state.isOpen = false
	}
}

const actions = {
	//
}

export default {
	state, mutations, actions
}
