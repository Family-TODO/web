<template>
	<BaseModal
		v-if="group"
		value
		class="group-detail">
		<!--TODO BaseGroup-->
		<div
			v-if="group.description"
			class="group-description">
			<BaseIcon name="description" /> <span>{{ group.description }}</span>
		</div>
	</BaseModal>
</template>

<script>
export default {
	computed: {
		group() {
			return this.$store.state.modals.group
		}
	}
}
</script>
