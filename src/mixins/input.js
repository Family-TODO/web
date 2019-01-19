export default {
	props: {
		label: {
			type: [Number, String],
			default: ''
		},
		id: {
			type: String,
			default: ''
		}
	},
	computed: {
		hasLabel() {
			return !!this.label
		},
		strId() {
			return this.id || `id-${this._uid}`
		}
	}
}
