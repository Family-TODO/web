<template>
	<div
		id="layout"
		class="layout_default"
	>
		<RouterView :class="{ 'modal-open': modalIsOpen }" />
		<div
			id="dialogs"
			v-if="modalIsOpen">
			<component
				:is="modalComponent"
				:data="modalData" />
		</div>
	</div>
</template>

<script>
import GroupDetailModal from '@/components/modals/GroupDetail'
import UserEditModal from '@/components/modals/UserEdit'
import { mapState } from 'vuex'

export default {
	components: {
		GroupDetailModal, UserEditModal
	},
	computed: {
		...mapState('modals', {
			modalComponent: 'component',
			modalData: 'data'
		}),
		modalIsOpen() {
			return !!this.modalComponent
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
