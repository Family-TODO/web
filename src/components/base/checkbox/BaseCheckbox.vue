<template>
	<div :class="['base-checkbox', {
		'base-checkbox_checked': value,
		'base-checkbox_only_view': onlyView
	}]"
		v-on="listeners"
	/>
</template>

<script>
export default {
	name: 'BaseCheckbox',
	props: {
		value: {
			type: Boolean,
			default: false
		},
		onlyView: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		listeners() {
			return {
				...this.$listeners,
				click: (evt) => {
					if (!this.onlyView) {
						this.$emit('input', !this.value)
					}
					this.$emit('click', evt)
				}
			}
		}
	}
}
</script>
