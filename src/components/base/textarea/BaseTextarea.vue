<template>
	<textarea
		:value="value"
		class="base-textarea"
		rows="5"
		v-bind="$attrs"
		v-on="listeners"
	/>
</template>

<script>
export default {
	name: 'BaseTextarea',
	props: {
		value: {
			type: String,
			default: ''
		}
	},
	computed: {
		listeners() {
			return {
				...this.$listeners,
				input: (evt) => {
					this.$emit('input', evt.target.value)
				}
			}
		}
	}
}
</script>
