<template>
	<div class="base-input">
		<input
			:value="value"
			v-bind="$attrs"
			v-on="listeners"
		>
	</div>
</template>

<script>
export default {
	name: 'BaseInput',
	inheritAttrs: false,
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
