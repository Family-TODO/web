<template>
	<div
		id="layout"
		class="layout_default"
	>
		<RouterView />
	</div>
</template>

<script>
export default {
	computed: {
		user() {
			return this.$store.state.profile.user
		}
	}
}
</script>
