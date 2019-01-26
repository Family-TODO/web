<template>
	<div
		id="layout"
		class="layout_default"
	>
		<RouterView :class="{ 'modal-open': dialogIsOpen }" />
		<div
			id="dialogs"
			v-if="dialogIsOpen">
			<GroupDetailModal />
			<UserEditModal />
		</div>
	</div>
</template>

<script>
import GroupDetailModal from '@/components/modals/GroupDetail'
import UserEditModal from '@/components/modals/UserEdit'

export default {
	components: {
		GroupDetailModal, UserEditModal
	},
	computed: {
		dialogIsOpen() {
			return this.$store.state.modals.isOpen
		}
	},
	mounted() {
		this.$store.dispatch('groups/fetchList')
	}
}
</script>

<style lang="scss" scoped>
.modal-open {
	filter: blur(5px);
}
</style>
