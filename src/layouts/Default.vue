<template>
	<div
		id="layout"
		class="layout_default"
	>
		<RouterView :class="{ 'modal-open': dialogIsOpen }" />
		<div
			id="dialogs"
			v-show="dialogIsOpen">
			<GroupDetailModal v-if="group" />
		</div>
	</div>
</template>

<script>
import GroupDetailModal from '@/components/modals/GroupDetail'

export default {
	components: {
		GroupDetailModal
	},
	computed: {
		dialogIsOpen() {
			return this.$store.state.modals.isOpen
		},
		group() {
			return this.$store.state.modals.group
		}
	},
	mounted() {
		this.$store.dispatch('groups/fetchList')
	}
}
</script>

<style lang="scss" scoped>
#dialogs {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.modal-open {
	filter: blur(5px);
}
</style>
