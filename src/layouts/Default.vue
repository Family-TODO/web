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
	mounted() {
		this.$store.dispatch('groups/fetchList')
	}
}
</script>
