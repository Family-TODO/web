<template>
	<form
		class="base-form"
		@submit.prevent="onSubmit">
		<slot />
	</form>
</template>

<script>
export default {
	name: 'BaseForm',
	props: {
		loading: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		onSubmit() {
			if (!this.loading) {
				this.$emit('submit')
			}
		}
	}
}
</script>
