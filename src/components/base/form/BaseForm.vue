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
	methods: {
		onSubmit() {
			this.$emit('submit')
		}
	}
}
</script>
