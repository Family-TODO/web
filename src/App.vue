<template>
	<div id="app">
		<RouterView />
		<div id="notifications" />
	</div>
</template>

<script>
export default {
	computed: {
		user() {
			return this.$store.state.profile.user
		}
	},
	watch: {
		user(val) {
			this.$router.push({ name: val ? 'groups' : 'auth' })
		}
	}
}
</script>
