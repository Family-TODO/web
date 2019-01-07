<template>
	<div
		id="layout"
		class="layout_not_authorized"
	>
		<RouterView />
	</div>
</template>

<script>
export default {
	beforeCreate() {
		const data = localStorage.getItem('user')

		if (data) {
			this.$router.push({ name: 'dashboard' })
		}
	}
}
</script>
